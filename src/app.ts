import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import fileRoutes from "./routes/fileRoutes";

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/file", fileRoutes);

// Error Handler
app.use(errorHandler);

export default app;
