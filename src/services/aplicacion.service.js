import prisma from '../config/prisma.js';

//CRUD DE APLICACIONES DE INSUMOS AGRICOLAS
export const getAplicaciones = () => prisma.aplicacion.findMany();

export const createAplicacion = (data) => prisma.aplicacion.create({ data });

export const getAplicacionById = (id) =>
  prisma.aplicacion.findUnique({ where: { idAplicacion: Number(id) } });

export const updateAplicacion = (id, data) =>
  prisma.aplicacion.update({ where: { idAplicacion: Number(id) }, data });

export const deleteAplicacion = (id) =>
  prisma.aplicacion.delete({ where: { idAplicacion: Number(id) } });
