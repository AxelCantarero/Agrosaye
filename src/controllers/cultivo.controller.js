import * as cultivoService from '../services/cultivo.service.js';

export const getCultivos = async (req, res) => {
  try {
    const cultivos = await cultivoService.getCultivos();
    res.json(cultivos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCultivoById = async (req, res) => {
  try {
    const cultivo = await cultivoService.getCultivoById(req.params.id);
    if (!cultivo) return res.status(404).json({ error: "Cultivo no encontrado" });
    res.json(cultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCultivo = async (req, res) => {
  try {
    const nuevoCultivo = await cultivoService.createCultivo(req.body);
    res.status(201).json(nuevoCultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCultivo = async (req, res) => {
  try {
    const cultivo = await cultivoService.updateCultivo(req.params.id, req.body);
    res.json(cultivo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCultivo = async (req, res) => {
  try {
    await cultivoService.deleteCultivo(req.params.id);
    res.json({ message: "Cultivo eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
