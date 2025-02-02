import { ClienteProveedor } from "../../models/index";

//import { User } from './models/user.model.js';

export async function GET() {
    try {
        const clientes = await ClienteProveedor.findAll()
        return Response.json(clientes)
    } catch (error) {
        console.log('Error al intentar obtener los clientes/proveedores ', error)
        return Response.json({
            mensaje: 'Error al intentar obtener los clientes/proveedores ',
            status: 500,
        })
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        //id	nombre	apellido	email	telefono	direccion	creado_en	actualizado_en	eliminado_en	id_tipo	
        await ClienteProveedor.create({
            nombre: body.nombre,
            apellido: body.apellido,
            email: body.email,
            telefono: body.telefono,
            direccion: body.direccion,
            id_tipo: body.idTipo
        })
        return Response.json({
            mensaje: 'Cliente Proveedor creado exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar crear el cliente ', error)
        return Response.json({
            mensaje: 'Error al intentar crear el cliente ',
            status: 500,
        })
    }
}

export async function PUT(req) {
    try {
        const body = await req.json()
        await ClienteProveedor.update(
            {
                nombre: body.nombre,
                apellido: body.apellido,
                email: body.email,
                telefono: body.telefono,
                direccion: body.direccion,
                id_tipo: body.idTipo
            },
            {
                where: {
                    id: body.id
                }
            }
        )
        return Response.json({
            mensaje: 'Usuario actualizado exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar actualizar el usuario ', error)
        return Response.json({
            mensaje: 'Error al intentar actualizar el usuario',
            status: 500,
        })
    }
}

export async function DELETE(req){
    try {
        const body = await req.json()
        await ClienteProveedor.destroy({
            where: {
                id: body.id
            }
        })
        return Response.json({
            mensaje: 'Cliente/Proveedor eliminado exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar eliminar el usuario ', error)
        return Response.json({
            mensaje: 'Error al intentar eliminar el usuario',
            status: 500,
        })
    }
}