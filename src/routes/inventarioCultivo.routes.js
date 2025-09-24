import { Router } from "express";
import * as inventarioCultivoController from "../controllers/inventarioCultivo.controller.js";

const router = Router();

router.get("/", inventarioCultivoController.getInventarioCultivo);
router.post("/", inventarioCultivoController.createInventarioCultivo);
router.get("/:id", inventarioCultivoController.getInventarioCultivoById);
router.put("/:id", inventarioCultivoController.updateInventarioCultivo);
router.delete("/:id", inventarioCultivoController.deleteInventarioCultivo);

export default router;
