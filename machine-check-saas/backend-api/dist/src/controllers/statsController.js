"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const worklogController_1 = require("./worklogController");
const reportController_1 = require("./reportController");
const getStats = (req, res) => {
    // Toplam çalışma saati
    const totalWorkHours = worklogController_1.worklogs.reduce((sum, w) => {
        if (w.start_time && w.end_time) {
            const start = new Date(w.start_time).getTime();
            const end = new Date(w.end_time).getTime();
            return sum + (end - start) / (1000 * 60 * 60);
        }
        return sum;
    }, 0);
    // Toplam yakıt maliyeti
    const totalFuelCost = worklogController_1.worklogs.reduce((sum, w) => sum + (w.fuel_cost || 0), 0);
    // Toplam rapor sayısı
    const totalReports = reportController_1.reports.length;
    res.json({
        totalWorkHours,
        totalFuelCost,
        totalReports,
    });
};
exports.getStats = getStats;
