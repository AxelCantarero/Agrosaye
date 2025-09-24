import { Router } from "express";
import * as actividadController from "../controllers/actividad.controller.js";

const router = Router();

router.get("/", actividadController.getActividades);
router.get("/:id", actividadController.getActividadById);
router.post("/", actividadController.createActividad);
router.put("/:id", actividadController.updateActividad);
router.delete("/:id", actividadController.deleteActividad);

export default router;
