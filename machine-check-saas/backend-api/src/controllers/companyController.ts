
import { Request, Response } from "express";
import { pool } from "../services/db";


export const createCompany = async (req: Request, res: Response) => {
  const { name, tenant_id } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO companies (name, tenant_id) VALUES ($1, $2) RETURNING id, name, tenant_id',
      [name, tenant_id]
    );
    res.status(201).json({ message: "Firma oluşturuldu", company: result.rows[0] });
  } catch (err) {
    console.error("Firma ekleme hatası:", err);
    res.status(500).json({ message: "Firma eklenemedi", error: err });
  }
};


export const getCompanies = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT id, name, tenant_id FROM companies');
    res.json(result.rows);
  } catch (err) {
    console.error("Firma listeleme hatası:", err);
    res.status(500).json({ message: "Firmalar alınamadı", error: err });
  }
};
