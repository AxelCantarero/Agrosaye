import * as productoService from '../services/producto.service.js';

export const getProductos = async (req, res) => {
  try {
    const productos = await productoService.getProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductoById = async (req, res) => {
  try {
    const producto = await productoService.getProductoById(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProducto = async (req, res) => {
  try {
    const nuevoProducto = await productoService.createProducto(req.body);
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const producto = await productoService.updateProducto(req.params.id, req.body);
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    await productoService.deleteProducto(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
