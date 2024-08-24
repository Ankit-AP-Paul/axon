import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET!


export function authMiddleware(req: Request, res: Response, next: NextFunction) {

    if (!req.session) return res.status(401).json({
        message: 'Session Invalid'
    })

    const sessionCookie = req.session['axon'] ?? ''

    try {
        const decoded = jwt.verify(sessionCookie, JWT_SECRET)
        //@ts-ignore
        if (decoded.userID) {
            //@ts-ignore
            req.userID = decoded.userID

            next()
        }
        else {
            res.status(403).json({
                message: 'You are not logged in'
            })
        }
    }
    catch (err) {
        res.status(403).json({
            error: 'Authentication Failed'
        })
    }
}
