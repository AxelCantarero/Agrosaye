import prisma from "../config/prisma.js";


//CRUD DE INGRESOS
export const getIngresos = () => prisma.ingreso.findMany();

export const createIngreso = (data) => prisma.ingreso.create({data});

export const getIngresoById = (id) => prisma.ingreso.findUnique({where:{idIngreso:Number(id)}}); 

export const updateIngreso = (id,data) => prisma.ingreso.update({where:{idIngreso : Number(id)},data})

export const deleteIngrso = (id) => prisma.ingreso.delete({where:{idIngreso:Number(id)}});