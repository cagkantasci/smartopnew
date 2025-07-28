
import { Router } from "express";
import { addMaintenance, getUpcomingMaintenances } from "../controllers/maintenanceController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Bakım ekleme: admin ve manager
router.post("/add", authenticate, authorizeRoles("admin", "manager"), addMaintenance);
// Yaklaşan bakımlar: tüm roller
router.get("/upcoming", authenticate, authorizeRoles("admin", "manager", "operator"), getUpcomingMaintenances);

export default router;
