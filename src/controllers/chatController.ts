import { Request, Response } from "express";
import { saveMessage, getChatHistory } from "../services/chatService";

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { room, user, message } = req.body;
    const savedMessage = await saveMessage(room, user, message);
    res.status(201).json(savedMessage);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getMessages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { room } = req.params;
    const messages = await getChatHistory(room);
    res.status(200).json(messages);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
