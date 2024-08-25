import { Router } from "express";
import { authMiddleware } from "../../middleware";
import { prismaClient } from "../../config";
import { exec } from 'node:child_process'

const router = Router()


router.get('/', async (req, res) => {
    try {
        const machines = await prismaClient.machine.findMany({
            where: {
                in_use: false
            }
        })

        res.status(200).json({ machines })
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})

router.get('/my-machines', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID

    try {
        const provider = await prismaClient.provider.findUnique({
            where: {
                user_id: userID
            }
        })

        if (!provider) return res.status(404).json({
            message: 'Provider not found'

        })

        const machines = await prismaClient.machine.findMany({
            where: {
                provider_id: provider.id
            }
        })

        res.status(200).json({ machines })
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})

router.post('/create', authMiddleware, async (req, res) => {
    //@ts-ignore
    const userID = req.userID
    const { title, cpu, ram, size } = req.body

    try {
        const provider = await prismaClient.provider.findUnique({
            where: {
                user_id: userID
            }
        })

        if (!provider) return res.status(404).json({
            message: 'Provider not found'

        })

        const machine = await prismaClient.machine.create({
            data: {
                provider_id: provider.id,
                title,
                cpu,
                ram,
                size
            }
        })

        // TODO: create binary with cpu and ram as arguments
        // exec(`/`)

        console.log(machine)

        res.status(201).json({
            message: 'Machine created'
        })
    }
    catch (err) {
        console.log(err)

        res.status(500).json({
            message: 'Something wrong happened'
        })
    }
})


export default router
