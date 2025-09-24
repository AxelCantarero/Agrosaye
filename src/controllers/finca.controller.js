import * as fincaService from '../services/finca.service.js';

export const getFincas = async (req, res) => {
  try {
    const fincas = await fincaService.getFincas();
    res.json(fincas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFincaById = async (req, res) => {
  try {
    const finca = await fincaService.getFincaById(req.params.id);
    if (!finca) return res.status(404).json({ error: "Finca no encontrada" });
    res.json(finca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFinca = async (req, res) => {
  try {
    const nuevaFinca = await fincaService.createFinca(req.body);
    res.status(201).json(nuevaFinca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFinca = async (req, res) => {
  try {
    const finca = await fincaService.updateFinca(req.params.id, req.body);
    res.json(finca);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFinca = async (req, res) => {
  try {
    await fincaService.deleteFinca(req.params.id);
    res.json({ message: "Finca eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
