"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReports = exports.createReport = exports.reports = void 0;
exports.reports = [];
const createReport = (req, res) => {
    const { operator_id, equipment_id, checklist_id, status, photos, description } = req.body;
    const report = { id: exports.reports.length + 1, operator_id, equipment_id, checklist_id, status, photos, description, created_at: new Date().toISOString() };
    exports.reports.push(report);
    res.status(201).json({ message: "Rapor oluşturuldu", report });
};
exports.createReport = createReport;
const getReports = (req, res) => {
    res.json(exports.reports);
};
exports.getReports = getReports;
