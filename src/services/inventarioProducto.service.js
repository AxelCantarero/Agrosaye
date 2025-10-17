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

export const aumentarInventarioProducto = async (idProducto, cantidad) => {
  return prisma.inventarioProducto.update({
    where: { idProducto: Number(idProducto) },
    data: { stock: { increment: cantidad } }
  });
};

export const disminuirInventarioProducto = async (idProducto, cantidad) => {
  return prisma.inventarioProducto.update({
    where: { idProducto: Number(idProducto) },
    data: { stock: { decrement: cantidad } }
  });
};

export const obtenerStock = async (idProducto) => {
  return prisma.inventarioProducto.findUnique({
    where: { idProducto: Number(idProducto) },
    select: { cantidad: true }
  });
};
