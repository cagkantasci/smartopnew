
import { Router } from "express";
import { createCompany, getCompanies } from "../controllers/companyController";
import { authenticate } from "../middleware/auth";
import { authorizeRoles } from "../middleware/role";

const router = Router();

// Şirket ekleme: sadece admin
router.post("/", authenticate, authorizeRoles("admin"), createCompany);
// Şirket listeleme: admin ve manager
router.get("/", authenticate, authorizeRoles("admin", "manager"), getCompanies);

export default router;
