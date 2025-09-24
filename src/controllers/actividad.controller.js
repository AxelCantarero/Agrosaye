import * as actividadService from '../services/actividad.service.js';

export const getActividades = async (req, res) => {
  try {
    const actividades = await actividadService.getActividades();
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getActividadById = async (req, res) => {
  try {
    const actividad = await actividadService.getActividadById(req.params.id);
    if (!actividad) return res.status(404).json({ error: "Actividad no encontrada" });
    res.json(actividad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createActividad = async (req, res) => {
  try {
    const nuevaActividad = await actividadService.createActividad(req.body);
    res.status(201).json(nuevaActividad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateActividad = async (req, res) => {
  try {
    const actividad = await actividadService.updateActividad(req.params.id, req.body);
    res.json(actividad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteActividad = async (req, res) => {
  try {
    await actividadService.deleteActividad(req.params.id);
    res.json({ message: "Actividad eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
