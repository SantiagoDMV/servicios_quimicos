'use client'
import { obtenerProducto } from "@/app/services";
import { useState, useEffect } from "react";
export default function Precio({productoId}:any){
    const [producto,setProducto] = useState<any>()
    useEffect(()=>{
        const informacionProducto = async () =>{
            const id = JSON.parse(productoId.value).id
            const productoObtenido:any = await obtenerProducto(id)
            setProducto(productoObtenido)
        }
        informacionProducto()
    },[])
    
    return (
    <div>
        { producto &&
        <div>
        <p>{producto.id}</p>
        <p>{producto.nombre}</p>
        </div>
        }
        Precio
    </div>
    )
}