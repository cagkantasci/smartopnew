
import { Router } from "express";
import { getStats } from "../controllers/statsController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// İstatistikler: admin ve manager
router.get("/", authenticate, authorizeRoles("admin", "manager"), getStats);

export default router;
