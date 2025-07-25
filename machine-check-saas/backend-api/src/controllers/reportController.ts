import { Request, Response } from "express";

export const reports: any[] = [];

export const createReport = (req: Request, res: Response) => {
  const { operator_id, equipment_id, checklist_id, status, photos, description } = req.body;
  const report = { id: reports.length + 1, operator_id, equipment_id, checklist_id, status, photos, description, created_at: new Date().toISOString() };
  reports.push(report);
  res.status(201).json({ message: "Rapor oluşturuldu", report });
};

export const getReports = (req: Request, res: Response) => {
  res.json(reports);
};
