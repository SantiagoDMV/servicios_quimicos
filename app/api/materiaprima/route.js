import { MateriaPrima } from "../../models";
export async function GET() { 
    try{
    const materias = await MateriaPrima.findAll()
    return Response.json(materias)
    } catch (error) {
        console.log('Error al intentar obtener las materias primas ', error)
        return Response.json({
            mensaje: 'Error al intentar obtener las materias primas',
            status: 500,
        })
    }
}

export async function POST(req) {
    const body = await req.json()
    if (body.id) {
        try {
            const materia = await MateriaPrima.findByPk(parseInt(body.id))
            return Response.json(materia)
        } catch (error) {
            console.log('Error al intentar obtener la materia prima ',error)
            return Response.json({
                mensaje: 'Error al intentar obtener la materia prima ',
                status: 500,
            })
        }
    }

    try {
        await MateriaPrima.create({
            nombre: body.nombre,
            descripcion: body.descripcion,
            stock: body.stock,
            precio: body.precio,
            cantidad_minima: body.cantidad_minima,
            id_proveedor: body.id_proveedor,
        })
        return Response.json({
            mensaje: 'Materia Prima creada exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar crear la materia prima ', error)
        return Response.json({
            mensaje: 'Error al intentar crear la materia prima ',
            status: 500,
        })
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json()
         await MateriaPrima.destroy({
            where: {
                id: body.id
            }
        }
        )
        return Response.json({
            mensaje: 'Materia Prima eliminada exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar eliminar la materia prima ', error)
        return Response.json({
            mensaje: 'Error al intentar eliminar la materia prima ',
            status: 500,
        })
    }
}

export async function PUT(req) {
    try {
        const body = await req.json()
        await MateriaPrima.update(
            {
                nombre: body.nombre,
                descripcion: body.descripcion,
                stock: body.stock,
                precio: body.precio,
                cantidad_minima: body.cantidad_minima,
                id_proveedor: body.id_proveedor,
            }, {
            where: {
                id: body.id
            }
        }
        )
        return Response.json({
            mensaje: 'Materia Prima actulalizada exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar actualizar la materia prima ', error)
        return Response.json({
            mensaje: 'Error al intentar actualizar la materia prima ',
            status: 500,
        })
    }
}