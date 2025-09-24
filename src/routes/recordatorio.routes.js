import { Router } from "express";
import * as recordatorioController from "../controllers/recordatorio.controller.js";

const router = Router();

router.get("/", recordatorioController.getRecordatorios);
router.get("/:id", recordatorioController.getRecordatorioById);
router.post("/", recordatorioController.createRecordatorio);
router.put("/:id", recordatorioController.updateRecordatorio);
router.delete("/:id", recordatorioController.deleteRecordatorio);

export default router;
