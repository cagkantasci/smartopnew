"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("../middleware/upload"));
const uploadController_1 = require("../controllers/uploadController");
const auth_1 = require("../middleware/auth");
const role_1 = require("../middleware/role");
const router = (0, express_1.Router)();
// Fotoğraf yükleme: tüm roller
router.post("/photo", auth_1.authenticate, (0, role_1.authorizeRoles)("admin", "manager", "operator"), upload_1.default.single("file"), uploadController_1.uploadPhoto);
exports.default = router;
