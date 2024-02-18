import { Express, NextFunction, Request, Response } from "express";

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploadImage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("in multer", req.body);
    upload.single("image");
  } catch (err) {
    console.log(err);
  }
  console.log("leaving multer");
  next();
};
