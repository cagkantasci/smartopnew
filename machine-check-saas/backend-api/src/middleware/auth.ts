import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { users } from "../controllers/authController";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token gerekli" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret") as any;
    // users dizisinden gerçek user'ı bul
    const user = users.find(u => u.id === decoded.id);
    if (!user) return res.status(401).json({ message: "Kullanıcı bulunamadı" });
    const { password, company_id, ...rest } = user;
    const userData = { ...rest, companyId: company_id };
    (req as any).user = userData;
    next();
  } catch (err) {
    res.status(401).json({ message: "Geçersiz token" });
  }
};
