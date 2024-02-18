import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import sharp from "sharp";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import db from "./db";
import { randomImageName } from "./helpers";

const s3 = new S3Client({
  // region: process.env.BUCKET_REGION ?? "",
  region: "eu-north-1",
  credentials: {
    // accessKeyId: process.env.ACCESS_KEY as string,
    accessKeyId: "AKIAXYKJQJHCUJV7TB6E",
    // secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
    secretAccessKey: "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",
  },
});

export const putImage = async (file: Express.Multer.File, id: number) => {
  const buffer = await sharp(file.buffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer();

  const imageName = randomImageName();

  const params = {
    Bucket: process.env.BUCKET_NAME ?? "",
    Key: imageName,
    Body: buffer,
    ContentType: file.mimetype,
  };

  const command = new PutObjectCommand(params);
  await s3.send(command);

  return await db.query("UPDATE posts SET image = ($1) WHERE post_id = ($2)", [
    imageName,
    id,
  ]);
};

export const getImage = async (postId: number) => {
  const imageName = (
    await db.query("SELECT image FROM posts WHERE post_id = ($1)", [postId])
  ).rows[0].image;

  const getObjectParams = {
    Bucket: "trackie",
    Key: imageName,
  };

  const command = new GetObjectCommand(getObjectParams);
  return await getSignedUrl(s3, command);
};
