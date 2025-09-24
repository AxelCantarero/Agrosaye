import prisma from "../config/prisma.js";

export const getUnidades = () => prisma.unidadMedida.findMany();

export const createUnidad = (data) => prisma.unidadMedida.create({data});

export const getUnidadById = (id) => prisma.unidadMedida.findUnique({where:{idUnidadMedida:Number(id)}})

export const updateUnidad = (id,data) => prisma.unidadMedida.update({where:{idUnidadMedida:Number(id)},data})

export const deleteUnidad = (id) => prisma.unidadMedida.delete({where:{idUnidadMedida:Number(id)}});



