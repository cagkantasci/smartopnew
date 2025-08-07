"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = exports.users = void 0;
// Geçici kullanıcı verisi (veritabanı yerine)
exports.users = [];
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../services/db");
const register = async (req, res) => {
    const { name, email, password, role, company_id } = req.body;
    try {
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Email benzersiz mi kontrol et
        const existing = await db_1.pool.query('SELECT id FROM users WHERE email = $1', [email]);
        if (existing.rows.length > 0) {
            return res.status(409).json({ message: "Bu email zaten kayıtlı" });
        }
        const result = await db_1.pool.query('INSERT INTO users (name, email, password, role, company_id) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, email, role, company_id', [name, email, hashedPassword, role, company_id]);
        res.status(201).json({ message: "Kayıt başarılı", user: result.rows[0] });
    }
    catch (err) {
        console.error("Kayıt hatası:", err);
        res.status(500).json({ message: "Kayıt sırasında hata oluştu", error: err });
    }
};
exports.register = register;
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await db_1.pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı" });
        }
        const user = result.rows[0];
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Şifre yanlış" });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role, company_id: user.company_id }, process.env.JWT_SECRET || "secret", { expiresIn: "1d" });
        // Şifreyi göndermeden user objesini dön
        const { password: _pw, ...userData } = user;
        res.json({ message: "Giriş başarılı", token, user: userData });
    }
    catch (err) {
        console.error("Giriş hatası:", err);
        res.status(500).json({ message: "Giriş sırasında hata oluştu", error: err });
    }
};
exports.login = login;
