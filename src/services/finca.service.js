
import prisma from '../config/prisma.js';

// Obtener todas las fincas 
export const getFincas = async () => {
  return prisma.informacionFinca.findMany();
};

// Crear una nueva finca
export const createFinca = async (data) => {
  return prisma.informacionFinca.create({ data });
};

// Buscar finca por id
export const getFincaById = async (id) => {
  return prisma.informacionFinca.findUnique({
    where: { idFinca: Number(id) }   
  });
};

// Editar datos de la finca
export const updateFinca = async (id, data) => {
  return prisma.informacionFinca.update({
    where: { idFinca: Number(id) },  
    data
  });
};

// Eliminar finca
export const deleteFinca = async (id) => {
  return prisma.informacionFinca.delete({
    where: { idFinca: Number(id) }  
  });
};
