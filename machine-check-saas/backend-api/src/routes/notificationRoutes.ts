

import { Router } from "express";
import { notify } from "../controllers/notificationController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Bildirim gönderme: sadece admin ve manager
router.post("/send", authenticate, authorizeRoles("admin", "manager"), notify);

export default router;
