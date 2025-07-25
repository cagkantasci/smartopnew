import { Request, Response } from "express";

const checklists: any[] = [];

export const createChecklist = (req: Request, res: Response) => {
  const { equipment_id, items } = req.body;
  const checklist = { id: checklists.length + 1, equipment_id, items };
  checklists.push(checklist);
  res.status(201).json({ message: "Kontrol listesi oluşturuldu", checklist });
};

export const getChecklists = (req: Request, res: Response) => {
  res.json(checklists);
};
