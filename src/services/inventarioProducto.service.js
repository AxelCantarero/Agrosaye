import prisma from '../config/prisma.js';

//CRUD DE PRODUCTOS
export const getInventarioProductos = () => prisma.inventarioProducto.findMany();

export const createInventarioProducto = (data) => prisma.inventarioProducto.create({ data });

export const getInventarioProductoById = (id) =>
  prisma.inventarioProducto.findUnique({ where: { idInventarioProducto: Number(id) } });

export const updateInventarioProducto = (id, data) =>
  prisma.inventarioProducto.update({ where: { idInventarioProducto: Number(id) }, data });

export const deleteInventarioProducto = (id) =>
  prisma.inventarioProducto.delete({ where: { idInventarioProducto: Number(id) } });
