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
