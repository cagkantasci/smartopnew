import { Request, Response } from "express";
import { pool } from "../services/db";

export const getEquipmentByQR = async (req: Request, res: Response) => {
  const { qr } = req.body;
  try {
    const result = await pool.query(
      "SELECT id, name, company_id, type, plate FROM equipments WHERE plate = $1",
      [qr]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Makine bulunamadı" });
    }
    res.json({ equipment: result.rows[0] });
  } catch (err) {
    console.error("Makine QR ile arama hatası:", err);
    res.status(500).json({ message: "Makine alınamadı", error: err });
  }
// ...dosya sonundaki fazladan kapama parantezi kaldırıldı...
};
