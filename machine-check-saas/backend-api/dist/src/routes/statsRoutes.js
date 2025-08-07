"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statsController_1 = require("../controllers/statsController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// İstatistikler: admin ve manager
router.get("/", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager"), statsController_1.getStats);
exports.default = router;
