export const reports: any[] = [];
// Raporu onayla
export const approveReport = async (req: Request, res: Response) => {
  const reportId = req.params.id;
  const approvedBy = req.body.approved_by;
  try {
    const result = await pool.query(
      'UPDATE reports SET approval_status = $1, approved_by = $2 WHERE id = $3 RETURNING *',
      ['approved', approvedBy, reportId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Rapor bulunamadı" });
    }
    res.json({ message: "Rapor onaylandı", report: result.rows[0] });
  } catch (err) {
    console.error("Rapor onaylama hatası:", err);
    res.status(500).json({ message: "Rapor onaylanamadı", error: err });
  }
};

// Raporu reddet
export const rejectReport = async (req: Request, res: Response) => {
  const reportId = req.params.id;
  const approvedBy = req.body.approved_by;
  try {
    const result = await pool.query(
      'UPDATE reports SET approval_status = $1, approved_by = $2 WHERE id = $3 RETURNING *',
      ['rejected', approvedBy, reportId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Rapor bulunamadı" });
    }
    res.json({ message: "Rapor reddedildi", report: result.rows[0] });
  } catch (err) {
    console.error("Rapor reddetme hatası:", err);
    res.status(500).json({ message: "Rapor reddedilemedi", error: err });
  }
};

import { Request, Response } from "express";
import { pool } from "../services/db";


export const createReport = async (req: Request, res: Response) => {
  const { operator_id, equipment_id, checklist_id, status, photos, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO reports (operator_id, equipment_id, checklist_id, status, photos, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, operator_id, equipment_id, checklist_id, status, photos, description, created_at',
      [operator_id, equipment_id, checklist_id, status, JSON.stringify(photos), description]
    );
    res.status(201).json({ message: "Rapor oluşturuldu", report: result.rows[0] });
  } catch (err) {
    console.error("Rapor ekleme hatası:", err);
    res.status(500).json({ message: "Rapor eklenemedi", error: err });
  }
};


export const getReports = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT id, operator_id, equipment_id, checklist_id, status, photos, description, created_at FROM reports');
    res.json(result.rows);
  } catch (err) {
    console.error("Rapor listeleme hatası:", err);
    res.status(500).json({ message: "Raporlar alınamadı", error: err });
  }
};
