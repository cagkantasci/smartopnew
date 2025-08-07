"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpcomingMaintenances = exports.addMaintenance = void 0;
const maintenances = [];
const addMaintenance = (req, res) => {
    const { equipment_id, date, description } = req.body;
    const maintenance = { id: maintenances.length + 1, equipment_id, date, description };
    maintenances.push(maintenance);
    res.status(201).json({ message: "Bakım kaydedildi", maintenance });
};
exports.addMaintenance = addMaintenance;
const getUpcomingMaintenances = (req, res) => {
    const now = new Date().toISOString();
    const upcoming = maintenances.filter(m => m.date >= now);
    res.json(upcoming);
};
exports.getUpcomingMaintenances = getUpcomingMaintenances;
