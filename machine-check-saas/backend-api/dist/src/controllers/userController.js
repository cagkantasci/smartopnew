"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
// GET /api/users/me
const getMe = (req, res) => {
    // req.user backend'de authenticate middleware ile eklenmiş olmalı
    if (!req.user) {
        return res.status(401).json({ message: 'Yetkisiz' });
    }
    // Güvenlik için hassas alanları filtreleyebilirsiniz
    const { password, ...userData } = req.user;
    res.json(userData);
};
exports.getMe = getMe;
