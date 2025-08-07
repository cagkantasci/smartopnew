"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authController_1 = require("../controllers/authController");
const authenticate = (req, res, next) => {
    var _a;
    const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "Token gerekli" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "secret");
        // users dizisinden gerçek user'ı bul
        const user = authController_1.users.find(u => u.id === decoded.id);
        if (!user)
            return res.status(401).json({ message: "Kullanıcı bulunamadı" });
        const { password, company_id, ...rest } = user;
        const userData = { ...rest, companyId: company_id };
        req.user = userData;
        next();
    }
    catch (err) {
        res.status(401).json({ message: "Geçersiz token" });
    }
};
exports.authenticate = authenticate;
