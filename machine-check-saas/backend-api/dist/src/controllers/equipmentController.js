"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipments = exports.createEquipment = exports.equipments = void 0;
// Geçici makine verisi (veritabanı yerine)
exports.equipments = [];
const createEquipment = (req, res) => {
    const { name, company_id, type, plate } = req.body;
    const equipment = { id: exports.equipments.length + 1, name, company_id, type, plate };
    exports.equipments.push(equipment);
    res.status(201).json({ message: "Makine oluşturuldu", equipment });
};
exports.createEquipment = createEquipment;
const getEquipments = (req, res) => {
    res.json(exports.equipments);
};
exports.getEquipments = getEquipments;
