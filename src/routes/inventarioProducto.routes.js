import { Router } from "express";
import * as inventarioProductoController from "../controllers/inventarioProducto.controller.js";

const router = Router();

router.get("/", inventarioProductoController.getInventarioProductos);
router.post("/", inventarioProductoController.createInventarioProducto);
router.get("/:id", inventarioProductoController.getInventarioProductoById);
router.put("/:id", inventarioProductoController.updateInventarioProducto);
router.delete("/:id", inventarioProductoController.deleteInventarioProducto);

export default router;
