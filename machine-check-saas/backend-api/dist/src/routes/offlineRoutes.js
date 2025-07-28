"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const offlineController_1 = require("../controllers/offlineController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Offline veri senkronizasyonu: tüm roller
router.post("/sync", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), offlineController_1.syncOfflineData);
exports.default = router;
