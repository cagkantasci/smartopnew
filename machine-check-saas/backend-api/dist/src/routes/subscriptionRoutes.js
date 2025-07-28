"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subscriptionController_1 = require("../controllers/subscriptionController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Abonelik oluşturma: sadece admin
router.post("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin"), subscriptionController_1.createSubscription);
// Abonelik listeleme: admin ve manager
router.get("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), subscriptionController_1.getSubscriptions);
exports.default = router;
