import { Router } from "express";
import upload from "../middleware/upload";
import { uploadPhoto } from "../controllers/uploadController";

const router = Router();

router.post("/photo", upload.single("file"), uploadPhoto);

export default router;
