import { Queue } from 'bullmq'
import { redisConnection } from '../../config'

export const payoutQueue = new Queue('axon_payouts', { connection: redisConnection })

export const failedPayoutQueue = new Queue('axon_failed_payouts', { connection: redisConnection })
