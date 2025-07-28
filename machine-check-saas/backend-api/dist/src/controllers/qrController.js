"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipmentByQR = void 0;
const equipmentController_1 = require("./equipmentController");
const getEquipmentByQR = (req, res) => {
    const { qr } = req.body;
    // Örnek: QR kodu makine plakası ile eşleşiyor
    const equipment = equipmentController_1.equipments.find(e => e.plate === qr);
    if (!equipment)
        return res.status(404).json({ message: "Makine bulunamadı" });
    res.json({ equipment });
};
exports.getEquipmentByQR = getEquipmentByQR;
