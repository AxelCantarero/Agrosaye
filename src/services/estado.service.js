import prisma from '../config/prisma.js';

//CRUD DE estado
export const getEstado = () => prisma.estado.findMany();

export const createEstado = (data) => prisma.estado.create({ data });

export const getEstadoById = (id) =>
  prisma.estado.findUnique({ where: { idEstado: Number(id) } });

export const updateEstado = (id, data) =>
  prisma.estado.update({ where: { idEstado: Number(id) }, data });

export const deleteEstado = (id) =>
  prisma.estado.delete({ where: { idEstado: Number(id) } });
