import * as recordatorioService from '../services/recordatorio.service.js';

export const getRecordatorios = async (req, res) => {
  try {
    const recordatorios = await recordatorioService.getRecordatorios();
    res.json(recordatorios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecordatorioById = async (req, res) => {
  try {
    const recordatorio = await recordatorioService.getRecordatorioById(req.params.id);
    if (!recordatorio) return res.status(404).json({ error: "Recordatorio no encontrado" });
    res.json(recordatorio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRecordatorio = async (req, res) => {
  try {
    const nuevoRecordatorio = await recordatorioService.createRecordatorio(req.body);
    res.status(201).json(nuevoRecordatorio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRecordatorio = async (req, res) => {
  try {
    const recordatorio = await recordatorioService.updateRecordatorio(req.params.id, req.body);
    res.json(recordatorio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteRecordatorio = async (req, res) => {
  try {
    await recordatorioService.deleteRecordatorio(req.params.id);
    res.json({ message: "Recordatorio eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
