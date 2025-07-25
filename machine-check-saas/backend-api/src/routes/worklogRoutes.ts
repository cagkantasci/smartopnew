import { Router } from "express";
import { startWork, endWork, getWorkLogs } from "../controllers/worklogController";

const router = Router();

router.post("/start", startWork);
router.post("/end", endWork);
router.get("/", getWorkLogs);

export default router;
