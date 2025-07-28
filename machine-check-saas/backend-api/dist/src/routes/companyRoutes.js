"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const companyController_1 = require("../controllers/companyController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Şirket ekleme: sadece admin
router.post("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin"), companyController_1.createCompany);
// Şirket listeleme: admin ve manager
router.get("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), companyController_1.getCompanies);
exports.default = router;
