import mongoose, { Document, Schema } from "mongoose";

export interface IFile extends Document {
  filename: string;
  contentType: string;
  size: number;
  path: string;
}

const FileSchema: Schema = new Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  size: { type: Number, required: true },
  path: { type: String, required: true },
});

export default mongoose.model<IFile>("File", FileSchema);
