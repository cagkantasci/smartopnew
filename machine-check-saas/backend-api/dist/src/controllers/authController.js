"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Geçici kullanıcı verisi (veritabanı yerine)
const users = [];
const register = async (req, res) => {
    const { name, email, password, role, company_id } = req.body;
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    const user = { id: users.length + 1, name, email, password: hashedPassword, role, company_id };
    users.push(user);
    res.status(201).json({ message: "Kayıt başarılı", user });
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user)
        return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    const isMatch = await bcryptjs_1.default.compare(password, user.password);
    if (!isMatch)
        return res.status(401).json({ message: "Şifre yanlış" });
    const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role, company_id: user.company_id }, process.env.JWT_SECRET || "secret", { expiresIn: "1d" });
    res.json({ message: "Giriş başarılı", token });
};
exports.login = login;
