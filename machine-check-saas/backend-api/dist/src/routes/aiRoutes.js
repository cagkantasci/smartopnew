"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aiController_1 = require("../controllers/aiController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// AI tahmin: tüm roller
router.post("/predict", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), aiController_1.predictFailure);
exports.default = router;
