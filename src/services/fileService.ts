import fs from "fs";
import path from "path";
import File, { IFile } from "../models/File";

export const uploadFile = async (file: Express.Multer.File): Promise<IFile> => {
  const filePath = path.join("uploads", file.filename);
  const fileMeta = new File({
    filename: file.originalname,
    contentType: file.mimetype,
    size: file.size,
    path: filePath,
  });
  await fileMeta.save();
  return fileMeta;
};

export const getFileStream = async (id: string): Promise<fs.ReadStream> => {
  const file = await File.findById(id);
  if (!file) throw new Error("File not found");
  return fs.createReadStream(file.path);
};
