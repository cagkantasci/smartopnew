import { Router } from "express";
import { createReport, getReports } from "../controllers/reportController";

import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();


// Sadece operator ve manager rapor oluşturabilir
router.post("/", authenticate, authorizeRoles("operator", "manager"), createReport);
// Sadece admin ve manager raporları görebilir
router.get("/", authenticate, authorizeRoles("admin", "manager"), getReports);

export default router;
