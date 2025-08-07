import { Router } from "express";
import { createReport, getReports, approveReport, rejectReport } from "../controllers/reportController";

import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();


// Sadece operator ve manager rapor oluşturabilir
router.post("/", authenticate, authorizeRoles("operator", "manager"), createReport);
// Sadece admin ve manager raporları görebilir
router.get("/", authenticate, authorizeRoles("admin", "manager"), getReports);

// Raporu onayla
router.post("/:id/approve", authenticate, authorizeRoles("admin", "manager"), approveReport);
// Raporu reddet
router.post("/:id/reject", authenticate, authorizeRoles("admin", "manager"), rejectReport);

export default router;
