import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Geçici kullanıcı verisi (veritabanı yerine)
const users: any[] = [];

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role, company_id } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, name, email, password: hashedPassword, role, company_id };
  users.push(user);
  res.status(201).json({ message: "Kayıt başarılı", user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Şifre yanlış" });
  const token = jwt.sign({ id: user.id, role: user.role, company_id: user.company_id }, process.env.JWT_SECRET || "secret", { expiresIn: "1d" });
  res.json({ message: "Giriş başarılı", token });
};
