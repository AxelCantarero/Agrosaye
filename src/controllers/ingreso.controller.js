import * as ingresoService from '../services/ingreso.service.js';
import { disminuirProduccionCultivo } from '../services/inventarioCultivo.service.js';

export const getIngresos = async (req, res) => {
  try {
    const ingresos = await ingresoService.getIngresos();
    res.json(ingresos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIngresoById = async (req, res) => {
  try {
    const ingreso = await ingresoService.getIngresoById(req.params.id);
    if (!ingreso) return res.status(404).json({ error: "Ingreso no encontrado" });
    res.json(ingreso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createIngreso = async (req, res) => {
  try {
    const nuevoIngreso = await ingresoService.createIngreso(req.body);

    if(req.body.cultivoId && req.body.cantidad){
      await disminuirProduccionCultivo(req.body.cultivoId, req.body.cantidad)
    }
    res.status(201).json(nuevoIngreso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateIngreso = async (req, res) => {
  try {
    const ingreso = await ingresoService.updateIngreso(req.params.id, req.body);
    res.json(ingreso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteIngreso = async (req, res) => {
  try {
    await ingresoService.deleteIngreso(req.params.id);
    res.json({ message: "Ingreso eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
