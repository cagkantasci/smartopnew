
import { Router } from "express";
import { predictFailure } from "../controllers/aiController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// AI tahmin: tüm roller
router.post("/predict", authenticate, authorizeRoles("admin", "manager", "operator"), predictFailure);

export default router;
