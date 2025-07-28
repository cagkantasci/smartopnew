"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const maintenanceController_1 = require("../controllers/maintenanceController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Bakım ekleme: admin ve manager
router.post("/add", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), maintenanceController_1.addMaintenance);
// Yaklaşan bakımlar: tüm roller
router.get("/upcoming", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), maintenanceController_1.getUpcomingMaintenances);
exports.default = router;
