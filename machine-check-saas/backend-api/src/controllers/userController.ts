import { Request, Response } from 'express';

// GET /api/users/me
export const getMe = (req: Request, res: Response) => {
  // req.user backend'de authenticate middleware ile eklenmiş olmalı
  if (!req.user) {
    return res.status(401).json({ message: 'Yetkisiz' });
  }
  // Güvenlik için hassas alanları filtreleyebilirsiniz
  const { password, ...userData } = req.user;
  res.json(userData);
};
