import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

export const registerUser = async (
  username: string,
  password: string
): Promise<void> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
};

export const loginUser = async (
  username: string,
  password: string
): Promise<string> => {
  const user = await User.findOne({ username });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  return token;
};
