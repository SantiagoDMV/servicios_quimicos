import { ProductoMateriaPrima } from "../../models";
import { Op } from "sequelize";

export async function POST(req) {
    try {
        const body = await req.json()

        if (body.id_materia && body.id_producto) {
            try {
                await ProductoMateriaPrima.create({
                    id_materia: body.id_materia,
                    id_producto: body.id_producto,
                    cantidad: body.cantidad
                })
                return Response.json(
                    {
                        mensaje: 'Materia Prima agregada al producto exitosamente',
                        status: 200
                    }
                )
            } catch (error) {
                console.log('Error al intentar agregar la materia prima al producto', error)
                return Response.json({
                    mensaje: 'Error al intentar agregar la materia prima al producto',
                    status: 500,
                })
            }
        }
        const consulta = await ProductoMateriaPrima.findAll({
            where: {
                id_producto: body.id_producto,
                id_materia: { [Op.ne]: null }
            }
        })
        return Response.json(consulta)
    } catch (error) {
        console.log('Error al intentar conseguir las Materias Primas del producto ', error)
        return Response.json({
            mensaje: 'Error al intentar conseguir las Materias Primas del producto ',
            status: 500,
        })
    }

}

export async function DELETE(req) {
    try {
        const body = await req.json()
        await ProductoMateriaPrima.destroy({
            where: {
                id_materia: body.id
            }
        })
        return Response.json(
            {
                mensaje: 'Materia prima eliminada del producto exitosamente',
                status: 200
            }
        )
    } catch (error) {
        console.log('Error al intentar eliminar la materia prima del producto', error)
        return Response.json({
            mensaje: 'Error al intentar eliminar la materia prima del producto',
            status: 500,
        })
    }
}

export async function PUT(req) {
    try {
        const body = await req.json()

        await ProductoMateriaPrima.update(
            {
                cantidad: body.cantidad
            },
            {
                where: {
                    id_materia: body.id_materia,
                    id_producto: body.id_producto
                }
            }
        )
        return Response.json(
            {
                mensaje: 'Materia prima actualizada del producto exitosamente',
                status: 200
            }
        )
    } catch (error) {
        console.log('Error al intentar actualizar la materia prima del producto', error)
        return Response.json({
            mensaje: 'Error al intentar actualizar la materia prima del producto',
            status: 500,
        })
    }
}