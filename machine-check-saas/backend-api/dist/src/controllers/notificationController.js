"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = void 0;
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
