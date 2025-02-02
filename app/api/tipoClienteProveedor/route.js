import { TipoCliente } from "../../models"

export async function GET(req) {
    try {
        const tipos = await TipoCliente.findAll()
        return Response.json(tipos)
    } catch (error) {
        return Response.json({
            mensaje: 'Error al crear el tipo de cliente/proveedor'
        })
    }
}
export async function POST(req) {
    try{
        const body = await req.json()
        const crearTipo = await TipoCliente.create({
            nombre: body.nombre
        })
        return Response.json({
            mensaje: 'Tipo de usuario creado exitosamente' 
        })
    }catch(error){
        console.log(error)
        return Response.json({
            mensaje: 'Error al crear el tipo de usuario' 
        })
    }
}