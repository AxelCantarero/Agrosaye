import prisma from "../config/prisma.js";

export const getInventarioCultivos = () => prisma.inventarioCultivo.findMany();

export const createInventarioCultivo = (data) => prisma.inventarioCultivo.create({data});

export const getInventarioCultivoById = (id) => prisma.inventarioCultivo.findUnique({where:{idInventarioCultivo:Number(id)}});

export const updateInventarioCultivo = (id,data) => prisma.inventarioCultivo.update({where:{idInventarioCultivo:Number(id)},data});

export const deleteInventarioCultivo = (id) => prisma.inventarioCultivo.delete({where:{idInventarioCultivo: Number(id)}});

//CRUD