import * as inventarioProductoService from '../services/inventarioProducto.service.js';

export const getInventarioProductos = async (req, res) => {
  try {
    const inventarioProductos = await inventarioProductoService.getInventarioProductos();
    res.json(inventarioProductos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInventarioProductoById = async (req, res) => {
  try {
    const inventarioProducto = await inventarioProductoService.getInventarioProductoById(req.params.id);
    if (!inventarioProducto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(inventarioProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createInventarioProducto = async (req, res) => {
  try {
    const nuevoInventarioProducto = await inventarioProductoService.createInventarioProducto(req.body);
    res.status(201).json(nuevoInventarioProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInventarioProducto = async (req, res) => {
  try {
    const inventarioProducto = await inventarioProductoService.updateInventarioProducto(req.params.id, req.body);
    res.json(inventarioProducto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteInventarioProducto = async (req, res) => {
  try {
    await inventarioProductoService.deleteInventarioProducto(req.params.id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getStock = async (req, res) => {
  try {
    const { idProducto } = req.params;
    const stock = await inventarioService.obtenerStock(idProducto);
    if (!stock) {
      return res.status(404).json({ error: "Producto no encontrado en inventario" });
    }

    res.json({ idProducto: Number(idProducto), stock: stock.cantidad });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
