import prisma from "../config/prisma.js";

export const getCultivos = () => prisma.cultivo.findMany();

export const createCultivo = (data) => prisma.cultivo.create({data});

export const getCultivoById = (id) => prisma.cultivo.findUnique({where:{idCultivo:Number(id)}});

export const updateCultivo = (id,data) => prisma.cultivo.update({where:{idCultivo:Number(id)},data});

export const deleteCultivo = (id) => prisma.cultivo.delete({where:{idCultivo: Number(id)}});

//CRUD

