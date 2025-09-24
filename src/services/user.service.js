import prisma from "../config/prisma.js"
import {hashPassword, comparePassword} from "../utils/bcrypt.js"
import { generateToken } from "../utils/jwt.js"

export const registerUser = async (data) =>{
    const hashedPassword = await hashPassword(data.contrasena);
    return prisma.usuario.create({
        data: {
            nombreUsuario: data.nombreUsuario,
            contrasena: hashedPassword,
            fincaId: data.fincaId || null
        }
    })
}

export const loginUser = async ({nombreUsuario, contrasena}) => {
    const user = await prisma.usuario.findUnique({
        where: {
            nombreUsuario
        }
    })
    if (!user) throw new Error ("Usuario no encontrado")

    const valid = await comparePassword(contrasena, user.contrasena)
    if(!valid) throw new Error ("Contrasena incorrecta")

    const token = generateToken({id:user.id, nombreUsuario: user.nombreUsuario});
    return {user, token}
}