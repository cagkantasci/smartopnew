
import { Router } from "express";
import { createSubscription, getSubscriptions } from "../controllers/subscriptionController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Abonelik oluşturma: sadece admin
router.post("/", authenticate, authorizeRoles("admin"), createSubscription);
// Abonelik listeleme: admin ve manager
router.get("/", authenticate, authorizeRoles("admin", "manager"), getSubscriptions);

export default router;
