"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = exports.getNotifications = exports.sendNotification = void 0;
const db_1 = require("../services/db");
// Bildirim gönder (veritabanına kaydet)
const sendNotification = async (req, res) => {
    const { user_id, title, message } = req.body;
    try {
        const result = await db_1.pool.query('INSERT INTO notifications (user_id, title, message) VALUES ($1, $2, $3) RETURNING id, user_id, title, message, created_at', [user_id, title, message]);
        res.status(201).json({ message: "Bildirim gönderildi", notification: result.rows[0] });
    }
    catch (err) {
        console.error("Bildirim gönderme hatası:", err);
        res.status(500).json({ message: "Bildirim gönderilemedi", error: err });
    }
};
exports.sendNotification = sendNotification;
// Bildirimleri listele
const getNotifications = async (req, res) => {
    const { user_id } = req.query;
    try {
        const result = await db_1.pool.query('SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC', [user_id]);
        res.json(result.rows);
    }
    catch (err) {
        console.error("Bildirimler alınamadı:", err);
        res.status(500).json({ message: "Bildirimler alınamadı", error: err });
    }
};
exports.getNotifications = getNotifications;
const notificationService_1 = require("../services/notificationService");
const notify = async (req, res) => {
    const { token, title, body } = req.body;
    try {
        const result = await (0, notificationService_1.sendFCMNotification)(token, title, body);
        res.json({ message: "Bildirim gönderildi", result });
    }
    catch (error) {
        res.status(500).json({ message: "Bildirim gönderilemedi", error });
    }
};
exports.notify = notify;
