import { Router } from "express";
import * as ingresoController from "../controllers/ingreso.controller.js";

const router = Router();

router.get("/", ingresoController.getIngresos);
router.get("/:id", ingresoController.getIngresoById);
router.post("/", ingresoController.createIngreso);
router.put("/:id", ingresoController.updateIngreso);
router.delete("/:id", ingresoController.deleteIngreso);

export default router;
