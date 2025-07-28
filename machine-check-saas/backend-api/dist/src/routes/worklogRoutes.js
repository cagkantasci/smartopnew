"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const worklogController_1 = require("../controllers/worklogController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// İş başlatma ve bitirme: operator ve manager
router.post("/start", auth_1.authenticate, (0, role_1.authorizeRoles)("operator", "manager"), worklogController_1.startWork);
router.post("/end", auth_1.authenticate, (0, role_1.authorizeRoles)("operator", "manager"), worklogController_1.endWork);
// İş günlüğü listeleme: tüm roller
router.get("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), worklogController_1.getWorkLogs);
exports.default = router;
