import { Router } from "express";
import { createEquipment, getEquipments } from "../controllers/equipmentController";

const router = Router();

router.post("/", createEquipment);
router.get("/", getEquipments);

export default router;
