import jwt from 'jsonwebtoken'
import nacl from 'tweetnacl'
import { Router } from "express"
import { authMiddleware } from "../middleware"
import { bucketName, minioClient } from "../lib/minio/config"
import { JWT_SECRET, prismaClient } from "../config"


const router = Router()


router.get('/presignedUrl', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID

    const { filename } = req.query
    const objectName = `${userID}/${filename}`

    try {
        const presignedURL = await minioClient.presignedPutObject(bucketName, objectName, 1 * 60 * 60)

        res.json({ userID, presignedURL })
    }
    catch (err) {
        console.log(err)
    }
})


router.post('/signin', async (req, res) => {
    const { publicKey, signature } = req.body

    const message = new TextEncoder().encode(`Sign into axon on ${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`)

    // const result = nacl.sign.detached.verify(
    //     message,
    //     new Uint8Array(signature.data),
    //     new PublicKey(publicKey).toBytes()
    // )

    // if (!result) {
    //     return res.status(411).json({
    //         message: 'Incorrect signature'
    //     })
    // }


    try {
        const existingUser = await prismaClient.user.findFirst({
            where: {
                address: publicKey
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
                    address: publicKey
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