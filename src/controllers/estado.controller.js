import * as estadoService from '../services/estado.service.js';

export const getEstado = async (req, res) => {
  try {
    const estado = await estadoService.getEstado();
    res.json(estado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getEstadoById = async (req, res) => {
  try {
    const estado = await estadoService.getEstadoById(req.params.id);
    if (!estado) return res.status(404).json({ error: "Egreso no encontrado" });
    res.json(estado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEstado = async (req, res) => {
  try {
    const nuevoEstado = await estadoService.createEstado(req.body);
    res.status(201).json(nuevoEstado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEstado = async (req, res) => {
  try {
    const estado = await estadoService.updateEstado(req.params.id, req.body);
    res.json(estado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteEstado = async (req, res) => {
  try {
    await estadoService.deleteEstado(req.params.id);
    res.json({ message: "Egreso eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
