import { Router } from "express";
import * as cultivoController from "../controllers/cultivo.controller.js";

const router = Router();

router.get("/", cultivoController.getCultivos);
router.get("/:id", cultivoController.getCultivoById);
router.post("/", cultivoController.createCultivo);
router.put("/:id", cultivoController.updateCultivo);
router.delete("/:id", cultivoController.deleteCultivo);

export default router;
