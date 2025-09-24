import prisma from '../config/prisma.js';

//CRUD DE PRODUCTOS
export const getProductos = () => prisma.producto.findMany();

export const createProducto = (data) => prisma.producto.create({ data });

export const getProductoById = (id) =>
  prisma.producto.findUnique({ where: { idProducto: Number(id) } });

export const updateProducto = (id, data) =>
  prisma.producto.update({ where: { idProducto: Number(id) }, data });

export const deleteProducto = (id) =>
  prisma.producto.delete({ where: { idProducto: Number(id) } });
