
import { Router } from "express";
import upload from "../middleware/upload";
import { uploadPhoto } from "../controllers/uploadController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Fotoğraf yükleme: tüm roller
router.post("/photo", authenticate, authorizeRoles("admin", "manager", "operator"), upload.single("file"), uploadPhoto);

export default router;
