"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipmentController_1 = require("../controllers/equipmentController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Ekipman ekleme: sadece admin ve manager
router.post("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), equipmentController_1.createEquipment);
// Ekipman listeleme: tüm roller
router.get("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), equipmentController_1.getEquipments);
exports.default = router;
