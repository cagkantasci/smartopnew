import { Request, Response } from "express";

export const worklogs: any[] = [];

export const startWork = (req: Request, res: Response) => {
  const { operator_id, equipment_id } = req.body;
  const worklog = { id: worklogs.length + 1, operator_id, equipment_id, start_time: new Date().toISOString() };
  worklogs.push(worklog);
  res.status(201).json({ message: "Çalışma başlatıldı", worklog });
};

export const endWork = (req: Request, res: Response) => {
  const { worklog_id, distance, fuel_price } = req.body;
  const worklog = worklogs.find(w => w.id === worklog_id);
  if (!worklog) return res.status(404).json({ message: "Kayıt bulunamadı" });
  worklog.end_time = new Date().toISOString();
  worklog.distance = distance;
  worklog.fuel_cost = distance && fuel_price ? distance * fuel_price : undefined;
  res.json({ message: "Çalışma sonlandırıldı", worklog });
};

export const getWorkLogs = (req: Request, res: Response) => {
  res.json(worklogs);
};
