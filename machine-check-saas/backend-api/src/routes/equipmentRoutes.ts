
import { Router } from "express";
import { createEquipment, getEquipments } from "../controllers/equipmentController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Ekipman ekleme: sadece admin ve manager
router.post("/", authenticate, authorizeRoles("admin", "manager"), createEquipment);
// Ekipman listeleme: tüm roller
router.get("/", authenticate, authorizeRoles("admin", "manager", "operator"), getEquipments);

export default router;
