import { verifySignature } from '@taquito/utils'
import jwt from 'jsonwebtoken'
import { Router } from "express"
import { JWT_SECRET, prismaClient } from '../../config'
import { messageToHexExpr } from '../../utils/magic-bytes'


const router = Router()


router.post('/signin', async (req, res) => {
    const { address, publicKey, signature } = req.body

    const message = `Sign into axon on ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`

    const isVerified = verifySignature(messageToHexExpr(message), publicKey, signature)

    if (!isVerified) {
        return res.status(411).json({
            message: 'Incorrect signature'
        })
    }

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
    }
})

router.get('/logout', async (req, res) => {
    req.session = null
    res.json({ message: 'Logged Out' })
})


export default router
