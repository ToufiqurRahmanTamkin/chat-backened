import mongoose, { Document, Schema } from "mongoose";

export interface IChat extends Document {
  room: string;
  user: string;
  message: string;
  createdAt: Date;
}

const ChatSchema: Schema = new Schema({
  room: { type: String, required: true },
  user: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IChat>("Chat", ChatSchema);
