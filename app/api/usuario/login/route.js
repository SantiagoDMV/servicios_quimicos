import { Usuario } from "../../../models"
import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export async function GET(){
    try {
        (await cookies()).delete(process.env.AUTH_COOKIE,)

        return Response.json({
            mensaje: 'Sesion cerrada',
            status: 200
        })
    } catch (error) {
        console.log(error)
        return Response.json({
            mensaje: 'Error al intentar cerrar sesion',
            status: 500
        })
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const consultaEmail = await Usuario.findOne({
            where: {
                email: body.email,
            }
        })
        if(!consultaEmail)
            return Response.json({
        mensaje: 'usuario no encontrado',
        status: 500
        })

        const passwordNotHashing = await bcrypt.compare(body.password,consultaEmail.password)
        
        if (!passwordNotHashing)
            return Response.json(
                {
                    mensaje: 'Contraseña incorrecta',
                    status: 500
                }
            )
        
            const token = jwt.sign({
                nombre: consultaEmail.nombre,
                apellido: consultaEmail.apellido,
                email: consultaEmail.email,
            },
            process.env.SECRET_TOKEN,
                { expiresIn: "7h" }
        )

        ;(await cookies()).set({
            name: process.env.AUTH_COOKIE,
                    value: token,
                    httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
                    secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
                    sameSite: 'strict', // Protects against CSRF attacks
                    maxAge: 60 * 60 * 24 * 7, // 1 week
        })
            return Response.json({
                mensaje: 'Sesion iniciada',
                status: 200,
            })
    } catch (error) {
        console.log('Error al intentar iniciar sesion', error)
        return Response.json({
            mensaje: 'Error al intentar iniciar sesion',
            status: 500,
        })
    }
}