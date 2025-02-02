"use client";
//import { actualizarClienteProveedor } from "@/app/services";
import Ventana from "../../Ventana/Ventana";
import FormularioActualizarClienteProveedor from "../../Formularios/FormulariosActualizaciones/FormularioClienteProveedor";
import { useState } from "react";
import BuscadorRegistrosTabla from "../../Buscador/BuscadorLista/BuscadorRegistrosTabla";
import VentanaConfirmacionEliminacion from "../../Ventana/VentanaConfirmacionEliminacion";
export default function ListaClienteProveedor({ clientes }: any) {
  const [banderaEditar, setBanderaEditar] = useState(false);
  const [banderaEliminar, setBanderaEliminar] = useState(false);
  const [datosEliminar, setDatosEliminar] = useState({
    id: 0,
    nombre: "",
  });
  const [registro, setRegistro] = useState<any[]>();
  const [clientesFiltrados, setClientesFiltrados] = useState<any[]>(clientes);

  const editarRegistro = async (e: number) => {
    //const editarRegistroConsulta = await actualizarClienteProveedor(e)
    const cliente = clientes.filter((c: any) => e == c.id);
    setRegistro(cliente);
    setBanderaEditar(!banderaEditar);
  };
  const handlerELiminar = async (e: any) => {
    //const eliminarCP = await eliminarClienteProveedor(e);
    setBanderaEliminar(!banderaEliminar);
    setDatosEliminar({
      id: e.id,
      nombre: e.nombre,
    });
  };
  return (
    <>
    <VentanaConfirmacionEliminacion
            tipoR={"clienteProveedor"}
            id={datosEliminar.id}
            nombre={datosEliminar.nombre}
            bandera={banderaEliminar}
            setBandera={setBanderaEliminar}
          />
      <Ventana
        contenido={<FormularioActualizarClienteProveedor cliente={registro} />}
        bandera={banderaEditar}
        setBandera={setBanderaEditar}
      />
      <BuscadorRegistrosTabla
        registros={clientes}
        setFiltro={setClientesFiltrados}
        titulo={"Cliente/Proveedor"}
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Teléfono
              </th>
              <th scope="col" className="px-6 py-3">
                Dirección
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados &&
              clientesFiltrados.map((c: any, index: number) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {c.nombre} {c.apellido}
                  </th>
                  <td className="px-6 py-4">{c.email}</td>
                  <td className="px-6 py-4">{c.telefono}</td>
                  <td className="px-6 py-4">{c.direccion}</td>
                  <td className="px-6 py-4">{c.id_tipo}</td>
                  <td className="flex items-center px-6 py-4">
                      <span
                        className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => editarRegistro(c.id)}
                      >
                        Editar
                      </span>
                      <span
                        className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                        //onClick={() => eliminarRegistro(e.id)}
                        //onClick={()=>setBanderaEliminar(!banderaEliminar)}
                        onClick={() => handlerELiminar(c)}
                      >
                        Quitar
                      </span>
                    </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
