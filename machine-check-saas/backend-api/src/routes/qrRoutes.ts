import { Router } from "express";
import { getEquipmentByQR } from "../controllers/qrController";

const router = Router();

router.post("/scan", getEquipmentByQR);

export default router;
