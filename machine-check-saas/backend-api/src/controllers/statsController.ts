import { Request, Response } from "express";
import { worklogs } from "./worklogController";
import { reports } from "./reportController";

export const getStats = (req: Request, res: Response) => {
  // Toplam çalışma saati
  const totalWorkHours = worklogs.reduce((sum: number, w: any) => {
    if (w.start_time && w.end_time) {
      const start = new Date(w.start_time).getTime();
      const end = new Date(w.end_time).getTime();
      return sum + (end - start) / (1000 * 60 * 60);
    }
    return sum;
  }, 0);

  // Toplam yakıt maliyeti
  const totalFuelCost = worklogs.reduce((sum: number, w: any) => sum + (w.fuel_cost || 0), 0);

  // Toplam rapor sayısı
  const totalReports = reports.length;

  res.json({
    totalWorkHours,
    totalFuelCost,
    totalReports,
  });
};
