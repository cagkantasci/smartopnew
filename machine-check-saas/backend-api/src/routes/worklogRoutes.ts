
import { Router } from "express";
import { startWork, endWork, getWorkLogs } from "../controllers/worklogController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// İş başlatma ve bitirme: operator ve manager
router.post("/start", authenticate, authorizeRoles("operator", "manager"), startWork);
router.post("/end", authenticate, authorizeRoles("operator", "manager"), endWork);
// İş günlüğü listeleme: tüm roller
router.get("/", authenticate, authorizeRoles("admin", "manager", "operator"), getWorkLogs);

export default router;
