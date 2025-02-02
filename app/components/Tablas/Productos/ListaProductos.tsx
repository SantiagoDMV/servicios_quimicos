"use client";
import { useState } from "react";
import Link from "next/link";
import Ventana from "../../Ventana/Ventana";
import BuscadorRegistrosTabla from "../../Buscador/BuscadorLista/BuscadorRegistrosTabla";
import FormularioActualizarProducto from "../../Formularios/FormulariosActualizaciones/FormularioProducto";
import VentanaConfirmacionEliminacion from "../../Ventana/VentanaConfirmacionEliminacion";

export default function ListaProductos({ producto }: any) {
  const [banderaEditar, setBanderaEditar] = useState(false);
  const [banderaEliminar, setBanderaEliminar] = useState(false);
  const [datosEliminar, setDatosEliminar] = useState({
    id: 0,
    nombre: "",
  });
  const [registro, setRegistro] = useState<any[]>();
  const [productosFiltrados, setProductosFiltrados] = useState<any[]>(producto);

  const editarRegistro = async (e: number) => {
    //const editarRegistroConsulta = await actualizarClienteProveedor(e)
    const productoFiltrado = producto.filter((c: any) => e == c.id);
    setRegistro(productoFiltrado);
    setBanderaEditar(!banderaEditar);
  };

  const handlerELiminar = (e: any) => {
    setBanderaEliminar(!banderaEliminar);
    setDatosEliminar({
      id: e.id,
      nombre: e.nombre,
    });
  };
  return (
    <>
      <VentanaConfirmacionEliminacion
        tipoR={"producto"}
        id={datosEliminar.id}
        nombre={datosEliminar.nombre}
        bandera={banderaEliminar}
        setBandera={setBanderaEliminar}
      />
      <Ventana
        contenido={<FormularioActualizarProducto producto={registro} />}
        bandera={banderaEditar}
        setBandera={setBanderaEditar}
      />
      <BuscadorRegistrosTabla
        registros={producto}
        setFiltro={setProductosFiltrados}
        titulo={"Producto"}
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            {
              <tr>
                <th scope="col" className="px-6 py-3">
                  Código
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            }
          </thead>
          <tbody>
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((e: any, index: number) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Link href={`productos/${e.id}`}>{e.codigo}</Link>
                    </th>
                    <td className="px-6 py-4">{e.nombre}</td>
                    <td className="px-6 py-4">{e.stock} KG</td>
                    <td className="px-6 py-4">{e.precio}</td>

                    <td className="flex items-center px-6 py-4">
                      <span
                        className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => editarRegistro(e.id)}
                      >
                        Editar
                      </span>
                      <span
                        className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        //onClick={() => eliminarRegistro(e.id)}
                        //onClick={()=>setBanderaEliminar(!banderaEliminar)}
                        onClick={() => handlerELiminar(e)}
                      >
                        Quitar
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="px-6 py-4">No hay productos</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
