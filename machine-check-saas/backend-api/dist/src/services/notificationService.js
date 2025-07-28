"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendFCMNotification = void 0;
const axios_1 = __importDefault(require("axios"));
const sendFCMNotification = async (token, title, body) => {
    const serverKey = process.env.FCM_SERVER_KEY;
    const payload = {
        to: token,
        notification: {
            title,
            body,
        },
    };
    try {
        const response = await axios_1.default.post("https://fcm.googleapis.com/fcm/send", payload, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `key=${serverKey}`,
            },
        });
        return response.data;
    }
    catch (error) {
        throw error;
    }
};
exports.sendFCMNotification = sendFCMNotification;
