import * as unidadService from '../services/unidadMedida.service.js';

export const getUnidades = async (req, res) => {
  try {
    const unidades = await unidadService.getUnidades();
    res.json(unidades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUnidadById = async (req, res) => {
  try {
    const unidad = await unidadService.getUnidadById(req.params.id);
    if (!unidad) return res.status(404).json({ error: "Unidad no encontrada" });
    res.json(unidad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUnidad = async (req, res) => {
  try {
    const nuevaUnidad = await unidadService.createUnidad(req.body);
    res.status(201).json(nuevaUnidad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUnidad = async (req, res) => {
  try {
    const unidad = await unidadService.updateUnidad(req.params.id, req.body);
    res.json(unidad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUnidad = async (req, res) => {
  try {
    await unidadService.deleteUnidad(req.params.id);
    res.json({ message: "Unidad eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
