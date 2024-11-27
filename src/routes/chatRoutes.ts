import express from "express";
import { sendMessage, getMessages } from "../controllers/chatController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/message", authenticateJWT, sendMessage);
router.get("/messages/:room", authenticateJWT, getMessages);

export default router;
