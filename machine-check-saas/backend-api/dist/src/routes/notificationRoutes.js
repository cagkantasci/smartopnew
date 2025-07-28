"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificationController_1 = require("../controllers/notificationController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Bildirim gönderme: sadece admin ve manager
router.post("/send", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), notificationController_1.notify);
exports.default = router;
