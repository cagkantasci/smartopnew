import { Request, Response } from "express";

// Geçici makine verisi (veritabanı yerine)
export const equipments: any[] = [];

export const createEquipment = (req: Request, res: Response) => {
  const { name, company_id, type, plate } = req.body;
  const equipment = { id: equipments.length + 1, name, company_id, type, plate };
  equipments.push(equipment);
  res.status(201).json({ message: "Makine oluşturuldu", equipment });
};

export const getEquipments = (req: Request, res: Response) => {
  res.json(equipments);
};
