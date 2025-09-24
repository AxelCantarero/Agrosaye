import { Router } from "express";
import * as egresoController from "../controllers/egreso.controller.js";

const router = Router();

router.get("/", egresoController.getEgresos);
router.get("/:id", egresoController.getEgresoById);
router.post("/", egresoController.createEgreso);
router.put("/:id", egresoController.updateEgreso);
router.delete("/:id", egresoController.deleteEgreso);

export default router;
