"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompanies = exports.createCompany = void 0;
const db_1 = require("../services/db");
const createCompany = async (req, res) => {
    const { name, tenant_id } = req.body;
    try {
        const result = await db_1.pool.query('INSERT INTO companies (name, tenant_id) VALUES ($1, $2) RETURNING id, name, tenant_id', [name, tenant_id]);
        res.status(201).json({ message: "Firma oluşturuldu", company: result.rows[0] });
    }
    catch (err) {
        console.error("Firma ekleme hatası:", err);
        res.status(500).json({ message: "Firma eklenemedi", error: err });
    }
};
exports.createCompany = createCompany;
const getCompanies = async (req, res) => {
    try {
        const result = await db_1.pool.query('SELECT id, name, tenant_id FROM companies');
        res.json(result.rows);
    }
    catch (err) {
        console.error("Firma listeleme hatası:", err);
        res.status(500).json({ message: "Firmalar alınamadı", error: err });
    }
};
exports.getCompanies = getCompanies;
