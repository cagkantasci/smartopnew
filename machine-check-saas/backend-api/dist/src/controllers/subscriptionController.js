"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscriptions = exports.createSubscription = void 0;
const subscriptions = [];
const createSubscription = (req, res) => {
    const { company_id, plan, payment_id } = req.body;
    const subscription = { id: subscriptions.length + 1, company_id, plan, payment_id, start_date: new Date().toISOString() };
    subscriptions.push(subscription);
    res.status(201).json({ message: "Abonelik başlatıldı", subscription });
};
exports.createSubscription = createSubscription;
const getSubscriptions = (req, res) => {
    res.json(subscriptions);
};
exports.getSubscriptions = getSubscriptions;
