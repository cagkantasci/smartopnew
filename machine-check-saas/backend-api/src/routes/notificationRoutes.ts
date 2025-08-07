

import { Router } from "express";
import { notify, sendNotification, getNotifications } from "../controllers/notificationController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Bildirim gönderme: sadece admin ve manager
router.post("/send", authenticate, authorizeRoles("admin", "manager"), notify);

// Bildirim gönder (veritabanına kaydet)
router.post("/db-send", authenticate, authorizeRoles("admin", "manager"), sendNotification);
// Bildirimleri listele
router.get("/list", authenticate, getNotifications);

export default router;
