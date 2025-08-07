
import { Request, Response } from "express";
import { pool } from "../services/db";


export const createChecklist = async (req: Request, res: Response) => {
  const { equipment_id, items } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO checklists (equipment_id, items) VALUES ($1, $2) RETURNING id, equipment_id, items',
      [equipment_id, JSON.stringify(items)]
    );
    res.status(201).json({ message: "Kontrol listesi oluşturuldu", checklist: result.rows[0] });
  } catch (err) {
    console.error("Checklist ekleme hatası:", err);
    res.status(500).json({ message: "Checklist eklenemedi", error: err });
  }
};


export const getChecklists = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT id, equipment_id, items FROM checklists');
    res.json(result.rows);
  } catch (err) {
    console.error("Checklist listeleme hatası:", err);
    res.status(500).json({ message: "Checklistler alınamadı", error: err });
  }
};
