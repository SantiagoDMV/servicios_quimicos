import { Producto } from "../../models";

export async function GET() {    
    const productos = await Producto.findAll()
    if (productos.length > 0)
        return Response.json(productos)
    else {
        return Response.json({ mensaje: 'No existen productos registrados' })
    }
}

export async function POST(req) {
    const body = await req.json()
    if (body.id) {
        try {
            const producto = await Producto.findByPk(parseInt(body.id))
            return Response.json(producto)
        } catch (error) {
                console.log('Error al intentar obtener el producto ', error)
                return Response.json({
                    mensaje: 'Error al intentar obtener el producot ',
                    status: 500,
                })
        }
    }

    try {
        await Producto.create({
            codigo: body.codigo,
            nombre: body.nombre,
            stock: body.stock,
            precio: body.precio
        })
        return Response.json(
            {
                mensaje: 'Producto creado exitosamente',
                status: 200
            }
        )
    } catch (error) {
        console.log('Error al intentar crear el producto', error)
        return Response.json({
            mensaje: 'Error al intentar crear el producto',
            status: 500,
        })
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json()
        await Producto.destroy({
            where: {
                id: body.id
            }
        }
        )
        return Response.json({
            mensaje: 'Producto eliminado exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar eliminar un producto ', error)
        return Response.json({
            mensaje: 'Error al intentar eliminar un producto ',
            status: 500,
        })
    }
}

export async function PUT(req) {
    try {
        const body = await req.json()
        
        if(body.preparacion){
            try {
                await Producto.update({
                    preparacion: body.preparacion
                },
                {
                    where:{
                        id: body.id
                    }
                }
            )
            return Response.json(
                {
                    mensaje: 'Preparacion del producto actualizada exitosamente',
                    status: 200
                }
            )
        } catch (error) {
            console.log('Error al intentar actualizar la preparacion del producto', error)
            return Response.json({
                mensaje: 'Error al intentar actualizar la preparacion del producto',
                status: 500,
            })
        }
        }
        await Producto.update(
            {
                codigo: body.codigo,
                nombre: body.nombre,
                stock: body.stock,
                precio: body.precio
            }, {
            where: {
                id: body.id
            }
        }
        )
        console.log('Producto actualizado exitosamente')
        return Response.json({
            mensaje: 'Producto actualizado exitosamente',
            status: 200,
        })
    } catch (error) {
        console.log('Error al intentar actualizar un producto ', error)
        return Response.json({
            mensaje: 'Error al intentar actualizar un producto ',
            status: 500,
        })
    }
}