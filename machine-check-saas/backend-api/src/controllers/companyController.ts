import { Request, Response } from "express";

// Geçici firma verisi (veritabanı yerine)
const companies: any[] = [];

export const createCompany = (req: Request, res: Response) => {
  const { name, tenant_id } = req.body;
  const company = { id: companies.length + 1, name, tenant_id };
  companies.push(company);
  res.status(201).json({ message: "Firma oluşturuldu", company });
};

export const getCompanies = (req: Request, res: Response) => {
  res.json(companies);
};
