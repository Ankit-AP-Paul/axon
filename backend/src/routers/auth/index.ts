import { verifySignature } from '@taquito/utils'
import jwt from 'jsonwebtoken'
import { Router } from "express"
import { JWT_SECRET, prismaClient } from '../../config'
import { messageToHexExpr } from '../../utils/magic-bytes'
import { authMiddleware } from '../../middleware'


const router = Router()


router.get('/get-contractor', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID

    try {
        const contractor = await prismaClient.contractor.findUnique({
            where: {
                user_id: userID
            }
        })

        res.status(200).json({ contractor })
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})

router.get('/get-provider', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID

    try {
        const provider = await prismaClient.provider.findUnique({
            where: {
                user_id: userID
            },
            include: {
                wallet: true
            }
        })

        res.status(200).json({ provider })
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})

router.post('/contractor-signup', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID
    const { name, email } = req.body

    try {
        const contractor = await prismaClient.contractor.findUnique({
            where: {
                user_id: userID
            }
        })

        if (!contractor) {
            const newContractor = await prismaClient.contractor.create({
                data: {
                    user_id: userID,
                    name,
                    email
                }
            })

            console.log(newContractor)

            res.status(201).json({
                message: 'Contractor profile created'
            })
        }
        else {
            const updatedContractor = await prismaClient.contractor.update({
                where: {
                    user_id: userID
                },
                data: {
                    name,
                    email
                }
            })

            console.log(updatedContractor)

            res.status(200).json({
                message: 'Contractor profile updated'
            })
        }
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})

router.post('/provider-signup', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID
    const { name, email } = req.body

    try {
        const provider = await prismaClient.provider.findUnique({
            where: {
                user_id: userID
            }
        })

        if (!provider) {
            const newProvider = await prismaClient.$transaction(async (tX) => {

                const provider = await tX.provider.create({
                    data: {
                        user_id: userID,
                        name,
                        email
                    }
                })

                await tX.wallet.create({
                    data: {
                        provider_id: provider.id,
                        pending_amount: 0,
                        processing_amount: 0,
                        locked_amount: 0
                    }
                })

                return provider
            })

            console.log(newProvider)

            res.status(201).json({
                message: 'Provider profile created'
            })
        }
        else {
            const updatedProvider = await prismaClient.provider.update({
                where: {
                    user_id: userID
                },
                data: {
                    name,
                    email
                }
            })

            console.log(updatedProvider)

            res.status(200).json({
                message: 'Provider profile updated'
            })
        }
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})

router.post('/signin', async (req, res) => {
    const { address, publicKey, signature } = req.body

    const message = `Sign into axon on ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`

    // const isVerified = verifySignature(messageToHexExpr(message), publicKey, signature)

    // if (!isVerified) {
    //     return res.status(411).json({
    //         message: 'Incorrect signature'
    //     })
    // }

    try {
        const existingUser = await prismaClient.user.findFirst({
            where: {
                address
            }
        })

        if (existingUser) {
            const token = jwt.sign({
                userID: existingUser.id
            },
                JWT_SECRET,
                { expiresIn: '1d' }
            )

            req.session!.axon = token
            res.json({ message: 'Logged In' })
        }
        else {
            const user = await prismaClient.user.create({
                data: {
                    address
                }
            })

            const token = jwt.sign({
                userID: user.id
            },
                JWT_SECRET,
                { expiresIn: '1d' }
            )

            req.session!.axon = token
            res.json({ message: 'Logged In' })
        }
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})

router.get('/logout', async (req, res) => {
    req.session = null
    res.json({ message: 'Logged Out' })
})


export default router
