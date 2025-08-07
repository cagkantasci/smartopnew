"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipmentByQR = void 0;
const db_1 = require("../services/db");
const getEquipmentByQR = async (req, res) => {
    const { qr } = req.body;
    try {
        const result = await db_1.pool.query("SELECT id, name, company_id, type, plate FROM equipments WHERE plate = $1", [qr]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Makine bulunamadı" });
        }
        res.json({ equipment: result.rows[0] });
    }
    catch (err) {
        console.error("Makine QR ile arama hatası:", err);
        res.status(500).json({ message: "Makine alınamadı", error: err });
    }
    // ...dosya sonundaki fazladan kapama parantezi kaldırıldı...
};
exports.getEquipmentByQR = getEquipmentByQR;
