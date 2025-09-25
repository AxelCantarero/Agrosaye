import * as aplicacionService from '../services/aplicacion.service.js';
import { disminuirInventarioProducto } from '../services/inventarioProducto.service.js';

export const getAplicaciones = async (req, res) => {
  try {
    const aplicaciones = await aplicacionService.getAplicaciones();
    res.json(aplicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAplicacionById = async (req, res) => {
  try {
    const aplicacion = await aplicacionService.getAplicacionById(req.params.id);
    if (!aplicacion) return res.status(404).json({ error: "Aplicación no encontrada" });
    res.json(aplicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAplicacion = async (req, res) => {
  try {
    const nuevaAplicacion = await aplicacionService.createAplicacion(req.body);
    if(req.body.productoId && req.body.cantidad){
      await disminuirInventarioProducto(req.body.productoId, req.body.cantidad)
    }
    res.status(201).json(nuevaAplicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAplicacion = async (req, res) => {
  try {
    const aplicacion = await aplicacionService.updateAplicacion(req.params.id, req.body);
    res.json(aplicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAplicacion = async (req, res) => {
  try {
    await aplicacionService.deleteAplicacion(req.params.id);
    res.json({ message: "Aplicación eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
