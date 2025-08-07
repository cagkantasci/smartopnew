"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipments = exports.createEquipment = void 0;
const db_1 = require("../services/db");
const createEquipment = async (req, res) => {
    const { name, company_id, type, plate } = req.body;
    try {
        const result = await db_1.pool.query('INSERT INTO equipments (name, company_id, type, plate) VALUES ($1, $2, $3, $4) RETURNING id, name, company_id, type, plate', [name, company_id, type, plate]);
        res.status(201).json({ message: "Makine oluşturuldu", equipment: result.rows[0] });
    }
    catch (err) {
        console.error("Makine ekleme hatası:", err);
        res.status(500).json({ message: "Makine eklenemedi", error: err });
    }
};
exports.createEquipment = createEquipment;
const getEquipments = async (req, res) => {
    try {
        const result = await db_1.pool.query('SELECT id, name, company_id, type, plate FROM equipments');
        res.json(result.rows);
    }
    catch (err) {
        console.error("Makine listeleme hatası:", err);
        res.status(500).json({ message: "Makineler alınamadı", error: err });
    }
};
exports.getEquipments = getEquipments;
// ...mock equipments dizisi kaldırıldı...
