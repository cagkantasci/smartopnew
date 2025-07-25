import { Request, Response } from "express";
import { equipments } from "./equipmentController";

export const getEquipmentByQR = (req: Request, res: Response) => {
  const { qr } = req.body;
  // Örnek: QR kodu makine plakası ile eşleşiyor
  const equipment = equipments.find(e => e.plate === qr);
  if (!equipment) return res.status(404).json({ message: "Makine bulunamadı" });
  res.json({ equipment });
};
