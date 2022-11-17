import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { Storage } from "megajs";
import fs from "fs";
import { getReview } from "./scrapper";

const reviewList = null;

function runMiddleware(
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse,
  fn: (...args: any[]) => void
): Promise<any> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
): Promise<void> => {
  console.log("-------->", req.body);
  if (req.body === undefined) {
    console.log("if------");
    if (reviewList === null) {
      const data = await getReview();
      res.status(201).json(data);
    } else res.status(201).json(reviewList);
    // call reviews scrapping function
  } else {
    console.log("else------");
    fileUploadToMega(req, res);
  }
};

export default handler;

const fileUploadToMega = async (
  req: NextApiRequest & { [key: string]: any },
  res: NextApiResponse
) => {
  const multerUpload = multer({
    dest: "./public/uploads/",
    preservePath: true,
  });
  await runMiddleware(req, res, multerUpload.single("file"));
  const file = req.file;
  const handleRemove = (file: any) => {
    if (file?.path === undefined) return;
  };
  fs.readFile(file.path, async (err: NodeJS.ErrnoException, data: Buffer) => {
    if (err) {
      handleRemove(file);
      return res
        .status(404)
        .json({ msg: "Error during uploading file", result: null });
    }

    const storage = await new Storage({
      email: "sakshamchauhan79@gmail.com",
      password: "thisisnewpasS@1",
    }).ready;

    const link: any = await storage.upload(file.originalname, data).complete;
    const url = await link.link();
    handleRemove(file);
    res
      .status(201)
      .json({ msg: "Successfully uploaded file to Mega Storage", result: url });
  });
};
