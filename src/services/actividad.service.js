import prisma from '../config/prisma.js';

export const getActividades = () => prisma.actividad.findMany();

export const createActividad = (data) => prisma.actividad.create({ data });

export const getActividadById = (id) =>
  prisma.actividad.findUnique({ where: { idActividad: Number(id) } });

export const updateActividad = (id, data) =>
  prisma.actividad.update({ where: { idActividad: Number(id) }, data });

export const deleteActividad = (id) =>
  prisma.actividad.delete({ where: { idActividad: Number(id) } });
