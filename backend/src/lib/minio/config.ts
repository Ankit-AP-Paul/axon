import { Client } from 'minio';
import { minioConnection } from '../../config';

const minioClient = new Client(minioConnection)

const bucketName = process.env.MINIO_BUCKET_NAME!;

export { minioClient, bucketName };
