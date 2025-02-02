import { Precio } from "../../models"
export async function POST(req){
    const body = await req.json()
    const precios = await Precio.findAll({
        where:{
            id_producto : body.id
        }
    })
    return Response.json(precios)
}