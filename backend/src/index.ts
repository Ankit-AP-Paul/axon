import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cookieSession from 'cookie-session'
import { createServer } from 'node:http'


dotenv.config()


const app = express()
const httpServer = createServer(app)


app.use(cors({
    origin: [process.env.FRONTEND_URL!],
    credentials: true
}))
app.use(morgan('tiny'))
app.use(express.json())
app.use(cookieSession({
    name: 'axon_session',
    secret: process.env.COOKIE_SECRET,
    maxAge: 1 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    signed: true,
    overwrite: true
}))



const port = process.env.PORT
httpServer.listen(port, () => {
    console.log(`Server PORT : ${port}`)
})
