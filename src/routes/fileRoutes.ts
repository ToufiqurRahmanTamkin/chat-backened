import express from "express";
import multer from "multer";
import { upload, download } from "../controllers/fileController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const router = express.Router();
const uploadMiddleware = multer({ dest: "uploads/" });

router.post(
  "/upload",
  authenticateJWT,
  uploadMiddleware.single("file"),
  upload
);
router.get("/download/:id", authenticateJWT, download);

export default router;
