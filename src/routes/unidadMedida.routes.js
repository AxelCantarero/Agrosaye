import { Router } from "express";
import * as unidadMedidaController from "../controllers/unidadMedida.controller.js";

const router = Router();

router.get("/", unidadMedidaController.getUnidades);
router.get("/:id", unidadMedidaController.getUnidadById);
router.post("/", unidadMedidaController.createUnidad);
router.put("/:id", unidadMedidaController.updateUnidad);
router.delete("/:id", unidadMedidaController.deleteUnidad);

export default router;
