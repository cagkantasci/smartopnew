"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTestToken = generateTestToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateTestToken(role) {
    const payload = {
        id: 1,
        name: `${role} user`,
        email: `${role}@test.com`,
        role,
        company_id: 1
    };
    const secret = process.env.JWT_SECRET || 'secret';
    return jsonwebtoken_1.default.sign(payload, secret, { expiresIn: '1h' });
}
