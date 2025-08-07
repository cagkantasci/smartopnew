export const worklogs: any[] = [];

import { Request, Response } from "express";
import { pool } from "../services/db";


export const startWork = async (req: Request, res: Response) => {
  const { operator_id, equipment_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO worklogs (operator_id, equipment_id, start_time) VALUES ($1, $2, NOW()) RETURNING id, operator_id, equipment_id, start_time',
      [operator_id, equipment_id]
    );
    res.status(201).json({ message: "Çalışma başlatıldı", worklog: result.rows[0] });
  } catch (err) {
    console.error("Çalışma başlatma hatası:", err);
    res.status(500).json({ message: "Çalışma başlatılamadı", error: err });
  }
};


export const endWork = async (req: Request, res: Response) => {
  const { worklog_id, distance, fuel_price } = req.body;
  try {
    // Yakıt maliyeti hesapla
    const fuel_cost = distance && fuel_price ? Number(distance) * Number(fuel_price) : null;
    const result = await pool.query(
      'UPDATE worklogs SET end_time = NOW(), distance = $1, fuel_price = $2, fuel_cost = $3 WHERE id = $4 RETURNING *',
      [distance, fuel_price, fuel_cost, worklog_id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Kayıt bulunamadı" });
    }
    res.json({ message: "Çalışma sonlandırıldı", worklog: result.rows[0] });
  } catch (err) {
    console.error("Çalışma bitirme hatası:", err);
    res.status(500).json({ message: "Çalışma bitirilemedi", error: err });
  }
};


export const getWorkLogs = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM worklogs');
    res.json(result.rows);
  } catch (err) {
    console.error("Çalışma kayıtları alınamadı:", err);
    res.status(500).json({ message: "Çalışma kayıtları alınamadı", error: err });
  }
};
