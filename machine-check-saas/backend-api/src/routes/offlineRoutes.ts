
import { Router } from "express";
import { syncOfflineData } from "../controllers/offlineController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Offline veri senkronizasyonu: tüm roller
router.post("/sync", authenticate, authorizeRoles("admin", "manager", "operator"), syncOfflineData);

export default router;
