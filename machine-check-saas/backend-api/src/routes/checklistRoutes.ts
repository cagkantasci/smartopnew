
import { Router } from "express";
import { createChecklist, getChecklists } from "../controllers/checklistController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Checklist ekleme: sadece admin ve manager
router.post("/", authenticate, authorizeRoles("admin", "manager"), createChecklist);
// Checklist listeleme: tüm roller
router.get("/", authenticate, authorizeRoles("admin", "manager", "operator"), getChecklists);

export default router;
