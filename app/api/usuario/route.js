import { Usuario } from "../../models";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
export async function POST(req) {
    try {
        const body = await req.json()
        const verificacion = await Usuario.findOne({
            where: {
                email: body.email
            }
        })
        if (!verificacion) {
            const hashing = await bcrypt.hash(body.password, 10)
            const consulta = await Usuario.create({
                apellido: body.apellido,
                cedula: body.cedula,
                telefono: body.telefono,
                nombre: body.nombre,
                email: body.email,
                password: hashing
            })

            const token = jwt.sign(
                {
                    nombre: body.nombre,
                    apellido: body.apellido,
                    email: body.email,
                },
                process.env.SECRET_TOKEN,
                { expiresIn: "7h" }
            )

                ; (await cookies()).set({
                    name: process.env.AUTH_COOKIE,
                    value: token,
                    httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
                    secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
                    sameSite: 'strict', // Protects against CSRF attacks
                    maxAge: 60 * 60 * 24 * 7, // 1 week
                })

                const response = Response.json(
                    {
                        mensaje: 'Usuario creado exitosamente',
                        status: 200
                    }
                )
            return response
        }

        return Response.json(
            {
                mensaje: 'El usuario ya existe',
                status: 500
            }
        )
    } catch (error) {
        console.log('Error al intentar crear el usuario', error)
        return Response.json({
            mensaje: 'Error al intentar crear el usuario',
            status: 500,
        })
    }
}