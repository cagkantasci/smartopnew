import { Router } from "express";
import { createSubscription, getSubscriptions } from "../controllers/subscriptionController";

const router = Router();

router.post("/", createSubscription);
router.get("/", getSubscriptions);

export default router;
