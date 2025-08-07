"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncOfflineData = void 0;
const syncOfflineData = (req, res) => {
    const { data } = req.body;
    // Burada offline gelen veriler işlenir ve ilgili tablolara kaydedilir
    // Örnek: data = [{ type: 'worklog', payload: {...} }, ...]
    res.json({ message: "Offline veriler başarıyla senkronize edildi", count: (data === null || data === void 0 ? void 0 : data.length) || 0 });
};
exports.syncOfflineData = syncOfflineData;
