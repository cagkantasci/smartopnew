import { Router } from "express";
import { createChecklist, getChecklists } from "../controllers/checklistController";

const router = Router();

router.post("/", createChecklist);
router.get("/", getChecklists);

export default router;
