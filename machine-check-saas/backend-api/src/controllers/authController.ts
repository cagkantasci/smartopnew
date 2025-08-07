
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../services/db";


export const register = async (req: Request, res: Response) => {
  const { name, email, password, role, company_id } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Email benzersiz mi kontrol et
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ message: "Bu email zaten kayıtlı" });
    }
    const result = await pool.query(
      'INSERT INTO users (name, email, password, role, company_id) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, email, role, company_id',
      [name, email, hashedPassword, role, company_id]
    );
    res.status(201).json({ message: "Kayıt başarılı", user: result.rows[0] });
  } catch (err) {
    console.error("Kayıt hatası:", err);
    res.status(500).json({ message: "Kayıt sırasında hata oluştu", error: err });
  }
};


export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Şifre yanlış" });
    }
    const token = jwt.sign({ id: user.id, role: user.role, company_id: user.company_id }, process.env.JWT_SECRET || "secret", { expiresIn: "1d" });
    // Şifreyi göndermeden user objesini dön
    const { password: _pw, ...userData } = user;
    res.json({ message: "Giriş başarılı", token, user: userData });
  } catch (err) {
    console.error("Giriş hatası:", err);
    res.status(500).json({ message: "Giriş sırasında hata oluştu", error: err });
  }
};
