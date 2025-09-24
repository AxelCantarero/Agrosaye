import { Router } from "express";
import * as aplicacionController from "../controllers/aplicacion.controller.js";

const router = Router();

router.get("/", aplicacionController.getAplicaciones);
router.get("/:id", aplicacionController.getAplicacionById);
router.post("/", aplicacionController.createAplicacion);
router.put("/:id", aplicacionController.updateAplicacion);
router.delete("/:id", aplicacionController.deleteAplicacion);

export default router;
