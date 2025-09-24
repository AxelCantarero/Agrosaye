import * as inventarioCultivoService from '../services/inventarioCultivo.service.js';

export const getInventarioCultivo = async (req, res) => {
  try {
    const inventarioCultivo = await inventarioCultivoService.getInventarioCultivos();
    res.json(inventarioCultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInventarioCultivoById = async (req, res) => {
  try {
    const inventarioCultivo = await inventarioCultivoService.getInventarioCultivoById(req.params.id);
    if (!inventarioCultivo) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(inventarioCultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createInventarioCultivo = async (req, res) => {
  try {
    const inventarioCultivo = await inventarioCultivoService.createInventarioCultivo(req.body);
    res.status(201).json(inventarioCultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInventarioCultivo = async (req, res) => {
  try {
    const inventarioCultivo = await inventarioCultivoService.updateInventarioCultivo(req.params.id, req.body);
    res.json(inventarioCultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteInventarioCultivo = async (req, res) => {
  try {
    await inventarioCultivoService.deleteInventarioCultivo(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
