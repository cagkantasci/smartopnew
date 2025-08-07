import { pool } from "../services/db";
// Bildirim gönder (veritabanına kaydet)
export const sendNotification = async (req: Request, res: Response) => {
  const { user_id, title, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO notifications (user_id, title, message) VALUES ($1, $2, $3) RETURNING id, user_id, title, message, created_at',
      [user_id, title, message]
    );
    res.status(201).json({ message: "Bildirim gönderildi", notification: result.rows[0] });
  } catch (err) {
    console.error("Bildirim gönderme hatası:", err);
    res.status(500).json({ message: "Bildirim gönderilemedi", error: err });
  }
};

// Bildirimleri listele
export const getNotifications = async (req: Request, res: Response) => {
  const { user_id } = req.query;
  try {
    const result = await pool.query(
      'SELECT * FROM notifications WHERE user_id = $1 ORDER BY created_at DESC',
      [user_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Bildirimler alınamadı:", err);
    res.status(500).json({ message: "Bildirimler alınamadı", error: err });
  }
};
import { Request, Response } from "express";
import { sendFCMNotification } from "../services/notificationService";

export const notify = async (req: Request, res: Response) => {
  const { token, title, body } = req.body;
  try {
    const result = await sendFCMNotification(token, title, body);
    res.json({ message: "Bildirim gönderildi", result });
  } catch (error) {
    res.status(500).json({ message: "Bildirim gönderilemedi", error });
  }
};
