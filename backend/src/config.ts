export const JWT_SECRET = process.env.JWT_SECRET!

export const PARENT_WALLET_ADDRESS = process.env.PARENT_WALLET_ADDRESS as string
export const PARENT_WALLET_PRIVATE_KEY = process.env.PARENT_WALLET_PRIVATE_KEY as string

export const minioConnection = {
    endPoint: process.env.MINIO_ENDPOINT!,
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESSKEY!,
    secretKey: process.env.MINIO_SECRETKEY!,
}

export const redisConnection = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT!),
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD
}
