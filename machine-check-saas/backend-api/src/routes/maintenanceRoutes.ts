import { Router } from "express";
import { addMaintenance, getUpcomingMaintenances } from "../controllers/maintenanceController";

const router = Router();

router.post("/add", addMaintenance);
router.get("/upcoming", getUpcomingMaintenances);

export default router;
