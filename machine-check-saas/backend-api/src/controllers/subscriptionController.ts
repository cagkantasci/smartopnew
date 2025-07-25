import { Request, Response } from "express";

const subscriptions: any[] = [];

export const createSubscription = (req: Request, res: Response) => {
  const { company_id, plan, payment_id } = req.body;
  const subscription = { id: subscriptions.length + 1, company_id, plan, payment_id, start_date: new Date().toISOString() };
  subscriptions.push(subscription);
  res.status(201).json({ message: "Abonelik başlatıldı", subscription });
};

export const getSubscriptions = (req: Request, res: Response) => {
  res.json(subscriptions);
};
