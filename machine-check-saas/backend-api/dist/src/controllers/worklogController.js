"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkLogs = exports.endWork = exports.startWork = exports.worklogs = void 0;
exports.worklogs = [];
const startWork = (req, res) => {
    const { operator_id, equipment_id } = req.body;
    const worklog = { id: exports.worklogs.length + 1, operator_id, equipment_id, start_time: new Date().toISOString() };
    exports.worklogs.push(worklog);
    res.status(201).json({ message: "Çalışma başlatıldı", worklog });
};
exports.startWork = startWork;
const endWork = (req, res) => {
    const { worklog_id, distance, fuel_price } = req.body;
    const worklog = exports.worklogs.find(w => w.id === worklog_id);
    if (!worklog)
        return res.status(404).json({ message: "Kayıt bulunamadı" });
    worklog.end_time = new Date().toISOString();
    worklog.distance = distance;
    worklog.fuel_cost = distance && fuel_price ? distance * fuel_price : undefined;
    res.json({ message: "Çalışma sonlandırıldı", worklog });
};
exports.endWork = endWork;
const getWorkLogs = (req, res) => {
    res.json(exports.worklogs);
};
exports.getWorkLogs = getWorkLogs;
