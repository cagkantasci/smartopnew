"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReports = exports.createReport = exports.rejectReport = exports.approveReport = exports.reports = void 0;
exports.reports = [];
// Raporu onayla
const approveReport = async (req, res) => {
    const reportId = req.params.id;
    const approvedBy = req.body.approved_by;
    try {
        const result = await db_1.pool.query('UPDATE reports SET approval_status = $1, approved_by = $2 WHERE id = $3 RETURNING *', ['approved', approvedBy, reportId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Rapor bulunamadı" });
        }
        res.json({ message: "Rapor onaylandı", report: result.rows[0] });
    }
    catch (err) {
        console.error("Rapor onaylama hatası:", err);
        res.status(500).json({ message: "Rapor onaylanamadı", error: err });
    }
};
exports.approveReport = approveReport;
// Raporu reddet
const rejectReport = async (req, res) => {
    const reportId = req.params.id;
    const approvedBy = req.body.approved_by;
    try {
        const result = await db_1.pool.query('UPDATE reports SET approval_status = $1, approved_by = $2 WHERE id = $3 RETURNING *', ['rejected', approvedBy, reportId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Rapor bulunamadı" });
        }
        res.json({ message: "Rapor reddedildi", report: result.rows[0] });
    }
    catch (err) {
        console.error("Rapor reddetme hatası:", err);
        res.status(500).json({ message: "Rapor reddedilemedi", error: err });
    }
};
exports.rejectReport = rejectReport;
const db_1 = require("../services/db");
const createReport = async (req, res) => {
    const { operator_id, equipment_id, checklist_id, status, photos, description } = req.body;
    try {
        const result = await db_1.pool.query('INSERT INTO reports (operator_id, equipment_id, checklist_id, status, photos, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, operator_id, equipment_id, checklist_id, status, photos, description, created_at', [operator_id, equipment_id, checklist_id, status, JSON.stringify(photos), description]);
        res.status(201).json({ message: "Rapor oluşturuldu", report: result.rows[0] });
    }
    catch (err) {
        console.error("Rapor ekleme hatası:", err);
        res.status(500).json({ message: "Rapor eklenemedi", error: err });
    }
};
exports.createReport = createReport;
const getReports = async (req, res) => {
    try {
        const result = await db_1.pool.query('SELECT id, operator_id, equipment_id, checklist_id, status, photos, description, created_at FROM reports');
        res.json(result.rows);
    }
    catch (err) {
        console.error("Rapor listeleme hatası:", err);
        res.status(500).json({ message: "Raporlar alınamadı", error: err });
    }
};
exports.getReports = getReports;
