"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const qrController_1 = require("../controllers/qrController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// QR ile ekipman sorgulama: tüm roller
router.post("/scan", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), qrController_1.getEquipmentByQR);
exports.default = router;
