import { Router } from "express"
import { authMiddleware } from "../../middleware"
import { bucketName, minioClient } from "../../lib/minio/config"

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

router.get('/get-object', async (req, res) => {
    const { userID, filename } = req.query
    const objectName = `${userID}/${filename}`

    try {
        const dataStream = await minioClient.getObject(bucketName, objectName)

        dataStream.pipe(res)
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: "Something went wrong"
        })
    }
})

router.get('/download-object', async (req, res) => {
    const { userID, filename } = req.query
    const objectName = `${userID}/${filename}`

    try {
        await minioClient.fGetObject(bucketName, objectName, `/tmp/${objectName}`)

        res.status(200).json({
            message: 'File downloaded successfully'
        })
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Failed to download object'
        })
    }
})

export default router
