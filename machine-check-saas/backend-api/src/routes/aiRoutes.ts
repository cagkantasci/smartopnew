import { Router } from "express";
import { predictFailure } from "../controllers/aiController";

const router = Router();

router.post("/predict", predictFailure);

export default router;
