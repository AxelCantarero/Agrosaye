import prisma from '../config/prisma.js';

export const getRecordatorios = () => prisma.recordatorio.findMany();

export const createRecordatorio = (data) => prisma.recordatorio.create({ data });

export const getRecordatorioById = (id) =>
  prisma.recordatorio.findUnique({ where: { idRecordatorio: Number(id) } });

export const updateRecordatorio = (id, data) =>
  prisma.recordatorio.update({ where: { idRecordatorio: Number(id) }, data });

export const deleteRecordatorio = (id) =>
  prisma.recordatorio.delete({ where: { idRecordatorio: Number(id) } });
