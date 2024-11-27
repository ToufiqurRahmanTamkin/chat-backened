import { Request, Response } from "express";
import { uploadFile, getFileStream } from "../services/fileService";

export const upload = async (req: Request, res: Response): Promise<void> => {
  try {
    const file = req.file;
    if (!file) throw new Error("No file provided.");

    const metadata = await uploadFile(file);
    res.status(201).json(metadata);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const download = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const fileStream = await getFileStream(id);
    fileStream.pipe(res);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
