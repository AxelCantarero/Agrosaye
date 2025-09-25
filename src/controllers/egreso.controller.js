import * as egresoService from '../services/egreso.service.js';
import { aumentarInventarioProducto } from '../services/inventarioProducto.service.js';

export const getEgresos = async (req, res) => {
  try {
    const egresos = await egresoService.getEgresos();
    res.json(egresos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEgresoById = async (req, res) => {
  try {
    const egreso = await egresoService.getEgresoById(req.params.id);
    if (!egreso) return res.status(404).json({ error: "Egreso no encontrado" });
    res.json(egreso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEgreso = async (req, res) => {
  try {
    const nuevoEgreso = await egresoService.createEgreso(req.body);

    if(req.body.productoId && req.body.cantidad){
      await aumentarInventarioProducto(req.body.productoId, req.body.cantidad);
    }
    res.status(201).json(nuevoEgreso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEgreso = async (req, res) => {
  try {
    const egreso = await egresoService.updateEgreso(req.params.id, req.body);
    res.json(egreso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEgreso = async (req, res) => {
  try {
    await egresoService.deleteEgreso(req.params.id);
    res.json({ message: "Egreso eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
