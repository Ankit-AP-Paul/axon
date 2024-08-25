import { Router } from "express";
import { authMiddleware } from "../../middleware";
import { prismaClient } from "../../config";

const router = Router()

router.post('/machine', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID
    const { machineID } = req.body

    try {
        await prismaClient.machine.update({
            where: {
                id: machineID
            },
            data: {
                in_use: true
            }
        })

        res.status(200).json({ message: 'YOu can upload to the machine' })
    }
    catch (err) {
        console.log(err)

        res.status(500).json({ message: 'Failed renting machine' })
    }
})


export default router
