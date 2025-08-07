"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChecklists = exports.createChecklist = void 0;
const db_1 = require("../services/db");
const createChecklist = async (req, res) => {
    const { equipment_id, items } = req.body;
    try {
        const result = await db_1.pool.query('INSERT INTO checklists (equipment_id, items) VALUES ($1, $2) RETURNING id, equipment_id, items', [equipment_id, JSON.stringify(items)]);
        res.status(201).json({ message: "Kontrol listesi oluşturuldu", checklist: result.rows[0] });
    }
    catch (err) {
        console.error("Checklist ekleme hatası:", err);
        res.status(500).json({ message: "Checklist eklenemedi", error: err });
    }
};
exports.createChecklist = createChecklist;
const getChecklists = async (req, res) => {
    try {
        const result = await db_1.pool.query('SELECT id, equipment_id, items FROM checklists');
        res.json(result.rows);
    }
    catch (err) {
        console.error("Checklist listeleme hatası:", err);
        res.status(500).json({ message: "Checklistler alınamadı", error: err });
    }
};
exports.getChecklists = getChecklists;
