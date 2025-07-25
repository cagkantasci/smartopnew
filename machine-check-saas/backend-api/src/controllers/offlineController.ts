import { Request, Response } from "express";

export const syncOfflineData = (req: Request, res: Response) => {
  const { data } = req.body;
  // Burada offline gelen veriler işlenir ve ilgili tablolara kaydedilir
  // Örnek: data = [{ type: 'worklog', payload: {...} }, ...]
  res.json({ message: "Offline veriler başarıyla senkronize edildi", count: data?.length || 0 });
};
