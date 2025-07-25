import { Router } from "express";
import { notify } from "../controllers/notificationController";

const router = Router();

router.post("/send", notify);

export default router;
