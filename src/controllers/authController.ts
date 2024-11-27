import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    await registerUser(username, password);
    res.status(201).json({ message: "User registered successfully." });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const token = await loginUser(username, password);
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
