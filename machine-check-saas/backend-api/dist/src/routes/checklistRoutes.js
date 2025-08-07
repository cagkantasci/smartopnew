"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checklistController_1 = require("../controllers/checklistController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Checklist ekleme: sadece admin ve manager
router.post("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), checklistController_1.createChecklist);
// Checklist listeleme: tüm roller
router.get("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), checklistController_1.getChecklists);
exports.default = router;
