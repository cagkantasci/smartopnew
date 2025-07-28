
import { Router } from "express";
import { getEquipmentByQR } from "../controllers/qrController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// QR ile ekipman sorgulama: tüm roller
router.post("/scan", authenticate, authorizeRoles("admin", "manager", "operator"), getEquipmentByQR);

export default router;
