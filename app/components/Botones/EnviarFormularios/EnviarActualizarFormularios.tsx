"use client";
import { actualizarProducto, actualizarClienteProveedor,actualizarMateriaPrima,actualizarPreparacionProducto } from "@/app/services";
export default function EnviarActualizarFormularios({
  tipo,
  datos,
  setTipo,
  setMensajeAlerta,
}: {
  tipo: string,
  datos: Record<string,any>,
  setTipo: React.Dispatch<React.SetStateAction<string>>,
  setMensajeAlerta: React.Dispatch<React.SetStateAction<string>>  
}) {
  const enviarDatosProducto = async () => {
    const id = datos.id;
    const codigo = datos.codigo;
    const nombre = datos.nombre;
    const stock = datos.stock;
    const precio = datos.precio;
    const presentacion = datos.presentacion
    
  
    const consulta = await actualizarProducto({
      id,
      codigo,
      nombre,
      stock,
      precio,
      presentacion
    });
    return consulta;
  };

  const enviarDatosClienteProveedor = async () => {
    const id = datos.id;
    const nombre = datos.nombre;
    const apellido = datos.apellido;
    const email = datos.email;
    const telefono = datos.telefono;
    const direccion = datos.direccion;
    const idTipo = datos.idTipo;
    const consulta = await actualizarClienteProveedor({
      id,
      nombre,
      apellido,
      email,
      telefono,
      direccion,
      idTipo,
    });
    return consulta;
  };

const enviarDatosMateriaPrima = async () => {
        const id = datos.id
        const nombre = datos.nombre
        const descripcion = datos.descripcion
        const stock = datos.stock
        const precio =datos.precio
        const cantidad_minima= datos.cantidad_minima
        const idProveedor = datos.idProveedor
          
        const consulta = await actualizarMateriaPrima({
      id,
      nombre,
      descripcion,
      stock,
      precio,
      cantidad_minima,
      idProveedor
    })
        return consulta
    }

  const actualizarPreparacion = async() =>{
      const id = datos.id
      const preparacion = datos.preparacion
      const consulta = await actualizarPreparacionProducto({id, preparacion})
      return consulta
  }
  
  const enviarDatos = async () => {
    type RespuestaApi={
      mensaje: string;
      status: number
    }
    let consulta: RespuestaApi = {mensaje: 'Error', status:500};
    switch (tipo) {
      case "producto":
        consulta = await enviarDatosProducto();
        break;
      case "clienteProveedor":
        consulta = await enviarDatosClienteProveedor();
        break
      case 'materiaPrima':
        consulta = await enviarDatosMateriaPrima()
        break
      case 'productoPreparacion':
        consulta = await actualizarPreparacion()
    }
    if (consulta.status == 500) {
      setTipo("Error");
      setMensajeAlerta(consulta.mensaje);
    } else {
      setTipo("Success");
      setMensajeAlerta(consulta.mensaje);
      const href = window.location.href;
      window.location.href = href;
    }
    return;
  };
  return (
    <button
      onClick={() => enviarDatos()}
      className=" bg-blue-400 text-white p-2 rounded-md min-w-full hover:bg-blue-500"
    >
      Enviar
    </button>
  );
}
