import { Router } from "express";
import { syncOfflineData } from "../controllers/offlineController";

const router = Router();

router.post("/sync", syncOfflineData);

export default router;
