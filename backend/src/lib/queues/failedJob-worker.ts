import { PrismaClient } from "@prisma/client";
import { Worker } from "bullmq";
import { redisConnection } from "../../config";
import { processPayout } from "../payout";


const prismaClient = new PrismaClient()


interface PayoutJob {
    payout_id: string;
    to: string;
    amount: number;
}


export const failedPayoutWorker = new Worker('axon_failed_payouts', async (job) => {
    const data: PayoutJob = job.data
    console.log('Failed-Job Received.. ', job.id)

    const signature = null
    // const signature = await processPayout({
    //     to: data.to,
    //     amount: data.amount
    // })

    const user = await prismaClient.user.findUnique({
        where: {
            address: data.to
        },
        include: {
            provider: true
        }
    })

    if (!user) throw new Error("Provider not found")


    if (!signature) {
        // they can be checked later manually by person
        await prismaClient.$transaction(async (tx) => {
            await tx.wallet.update({
                where: {
                    provider_id: user.provider?.id
                },
                data: {
                    pending_amount: {
                        increment: data.amount
                    },
                    processing_amount: {
                        decrement: data.amount
                    }
                }
            })

            await tx.payouts.update({
                where: {
                    id: data.payout_id
                },
                data: {
                    status: 'Failure'
                }
            })
        })

        await job.moveToFailed(new Error('Payout to provider failed in DLQ'), 'Payout to provider failed', true)
    }
    else {
        await prismaClient.$transaction(async (tx) => {
            await tx.wallet.update({
                where: {
                    provider_id: user.provider?.id
                },
                data: {
                    processing_amount: {
                        decrement: data.amount
                    },
                    locked_amount: {
                        increment: data.amount
                    }
                }
            })


            await tx.payouts.update({
                where: {
                    id: data.payout_id
                },
                data: {
                    signature,
                    status: 'Success'
                }
            })
        })

        return 'Payment Successful'
    }

}, {
    connection: redisConnection,
    limiter: {
        max: 2,
        duration: 10 * 1000
    }
})
