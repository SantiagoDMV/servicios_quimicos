'use client'
import { crearProducto,crearClienteProveedor,crearMateriaPrima, crearUsuario } from "@/app/services"

export default function EnviarCrearFormularios({tipo,datos,setTipo,setMensajeAlerta}:
    {
        tipo: string,
        datos : Record<string, any>,
        setTipo: React.Dispatch<React.SetStateAction<string>>,
        setMensajeAlerta: React.Dispatch<React.SetStateAction<string>>
    }
){
    
    const enviarProducto = async () => {
        const codigo = datos.codigo
        const nombre = datos.nombre
        const stock = datos.stock
        const precio = datos.precio
        const consulta= await crearProducto({codigo, nombre, stock, precio})
        return consulta
    }


    const enviarClienteProveedor = async () => {
          const nombre = datos.nombre
          const apellido = datos.apellido
          const email = datos.email
          const telefono = datos.telefono
          const direccion = datos.direccion
          const idTipo = datos.idTipo
          const consulta = await crearClienteProveedor({nombre, apellido, email, telefono, direccion, idTipo})
        return consulta
      }
    
        const enviarMateriaPrima = async () => {
            const nombre = datos.nombre
            const descripcion = datos.descripcion
            const stock = datos.stock
            const precio =datos.precio
            const cantidad_minima= datos.cantidad_minima
            const idProveedor = datos.idProveedor
            const consulta = await crearMateriaPrima({nombre, descripcion, stock, precio, cantidad_minima, idProveedor})
            return consulta    
        }
      
        const enviarUsuario = async () =>{
            const nombre = datos.nombre
            const apellido= datos.apellido
            const cedula = datos.cedula
            const telefono = datos.telefono
            const email = datos.email
            const password = datos.password
            const consulta = await crearUsuario({nombre, apellido,cedula,telefono,email,password})
            return consulta 
        }

    const enviarDatos = async () =>{
        type RespuestaApi = {
            mensaje: string,
            status: number
        }
        let consulta: RespuestaApi = {
            mensaje : 'error',
            status: 500
        }
        switch (tipo){
            case 'producto':
                    consulta = await enviarProducto()
                break
            case 'clienteProveedor':
                    consulta = await enviarClienteProveedor()
                break
            case 'materiaPrima':
                consulta = await enviarMateriaPrima()
                break
            case 'usuario':
                consulta = await enviarUsuario()
                break
        }
        
        if(consulta.status == 500){
            setTipo('Error')  
            setMensajeAlerta(consulta.mensaje)
        }else{
            setTipo('Success')  
          setMensajeAlerta(consulta.mensaje)
          const href = window.location.href
          window.location.href = href
        }
          return
    }
    return(
        <button 
        onClick={()=>enviarDatos()}
        className=" bg-blue-400 text-white p-2 rounded-md min-w-full hover:bg-blue-500">Enviar</button>
    )    
}