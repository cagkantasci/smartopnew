"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportController_1 = require("../controllers/reportController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Sadece operator ve manager rapor oluşturabilir
router.post("/", auth_1.authenticate, (0, role_1.authorizeRoles)("operator", "manager"), reportController_1.createReport);
// Sadece admin ve manager raporları görebilir
router.get("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), reportController_1.getReports);
exports.default = router;
