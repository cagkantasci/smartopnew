"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChecklists = exports.createChecklist = void 0;
const checklists = [];
const createChecklist = (req, res) => {
    const { equipment_id, items } = req.body;
    const checklist = { id: checklists.length + 1, equipment_id, items };
    checklists.push(checklist);
    res.status(201).json({ message: "Kontrol listesi oluşturuldu", checklist });
};
exports.createChecklist = createChecklist;
const getChecklists = (req, res) => {
    res.json(checklists);
};
exports.getChecklists = getChecklists;
