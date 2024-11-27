import Chat, { IChat } from "../models/Chat";

export const saveMessage = async (
  room: string,
  user: string,
  message: string
): Promise<IChat> => {
  const chatMessage = new Chat({ room, user, message });
  return await chatMessage.save();
};

export const getChatHistory = async (room: string): Promise<IChat[]> => {
  return await Chat.find({ room }).sort({ createdAt: 1 });
};
