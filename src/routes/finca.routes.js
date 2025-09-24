import { Router } from "express";
import * as fincaController from "../controllers/finca.controller.js";

const router = Router();

router.get("/", fincaController.getFincas);
router.get("/:id", fincaController.getFincaById);
router.post("/", fincaController.createFinca);
router.put("/:id", fincaController.updateFinca);
router.delete("/:id", fincaController.deleteFinca);

export default router;
