import { Request, Response } from "express";

const maintenances: any[] = [];

export const addMaintenance = (req: Request, res: Response) => {
  const { equipment_id, date, description } = req.body;
  const maintenance = { id: maintenances.length + 1, equipment_id, date, description };
  maintenances.push(maintenance);
  res.status(201).json({ message: "Bakım kaydedildi", maintenance });
};

export const getUpcomingMaintenances = (req: Request, res: Response) => {
  const now = new Date().toISOString();
  const upcoming = maintenances.filter(m => m.date >= now);
  res.json(upcoming);
};
