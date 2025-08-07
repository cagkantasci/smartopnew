import { Request, Response } from "express";
import { pool } from "../services/db";


export const createEquipment = async (req: Request, res: Response) => {
  const { name, company_id, type, plate } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO equipments (name, company_id, type, plate) VALUES ($1, $2, $3, $4) RETURNING id, name, company_id, type, plate',
      [name, company_id, type, plate]
    );
    res.status(201).json({ message: "Makine oluşturuldu", equipment: result.rows[0] });
  } catch (err) {
    console.error("Makine ekleme hatası:", err);
    res.status(500).json({ message: "Makine eklenemedi", error: err });
  }
};


export const getEquipments = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT id, name, company_id, type, plate FROM equipments');
    res.json(result.rows);
  } catch (err) {
    console.error("Makine listeleme hatası:", err);
    res.status(500).json({ message: "Makineler alınamadı", error: err });
  }
};
// ...mock equipments dizisi kaldırıldı...
