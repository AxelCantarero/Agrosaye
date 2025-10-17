import prisma from '../config/prisma.js';

export const getEgresos = () => prisma.egreso.findMany();

export const createEgreso = (data) => prisma.egreso.create({ data });

export const getEgresoById = (id) =>
  prisma.egreso.findUnique({ where: { idGasto: Number(id) } });

export const updateEgreso = (id, data) =>
  prisma.egreso.update({ where: { idGasto: Number(id) }, data });

export const deleteEgreso = (id) =>
  prisma.egreso.delete({ where: { idGasto: Number(id) } });
