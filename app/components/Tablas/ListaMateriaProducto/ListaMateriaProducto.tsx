"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import BuscadorRegistrosTabla from "../../Buscador/BuscadorLista/BuscadorRegistrosTabla";
import VentanaConfirmacionEliminacion from "../../Ventana/VentanaConfirmacionEliminacion";
import { obtenerMateriasPrimas } from "@/app/services";

export default function ListaMateriaProducto({
  materiasPrimasProducto,
}: any) {
  const [materiasProductosFiltrados, setMateriasProductosFiltrados] =
    useState<any[]>();
  const [materiasPrimas, setMateriasPrimas] = useState<any[]>();
  const [materiasPrimasBuscador, setMateriasPrimasBuscador] = useState<any[]>();
  const [cantidadProducto, setCantidadProducto] = useState<number>(0.0);
  const [cantidadesMateriasPrimas, setCantidadesMateriasPrimas] =
    useState<any[]>();
  const [banderaEliminar, setBanderaEliminar] = useState(false);
  const [datosEliminar, setDatosEliminar] = useState({
    id: 0,
    nombre: "",
  });

  useEffect(() => {
    const obtenerRegistros = async () => {
      const registros = await obtenerMateriasPrimas();
      setMateriasProductosFiltrados(registros);
      const materiasFiltradas = materiasPrimasProducto.map((c: any) => {
        const registro = registros.filter(
          (r: any) => parseInt(r.id) == parseInt(c.id_materia)
        );
        return registro[0];
      });
      setCantidadesMateriasPrimas(materiasPrimasProducto);
      setMateriasPrimas(materiasFiltradas);
      setMateriasPrimasBuscador(materiasFiltradas);
    };
    obtenerRegistros();
  }, []);

  const cambioDeCantidad = (e: any) => {
    setCantidadProducto(e);
    //.....
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
        tipoR={"materiaProducto"}
        id={datosEliminar.id}
        nombre={datosEliminar.nombre}
        bandera={banderaEliminar}
        setBandera={setBanderaEliminar}
      />
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-5">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="number"
            step={"0.01"}
            id="first_name"
            name="cantidad"
            onChange={(e) => cambioDeCantidad(parseFloat(e.target.value))}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0.00"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Procesar
          </button>
        </div>

      </div>

      <BuscadorRegistrosTabla
        //registros={materiasProductosFiltrados}
        registros={materiasPrimas}
        setFiltro={setMateriasPrimasBuscador}
        titulo={"Materia Prima"}
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            {
              <tr>
                <th scope="col" className="px-6 py-3">
                  Materia
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            }
          </thead>
          <tbody>
            {materiasPrimasBuscador &&
            cantidadesMateriasPrimas &&
            materiasPrimasBuscador.length > 0 ? (
              materiasPrimasBuscador.map((e: any, index: number) => {
                // a.map((e: any, index: number) => {
                const cantidadCalculada = cantidadProducto
                  ? (cantidadesMateriasPrimas[index].cantidad *
                      cantidadProducto) /
                    100
                  : 0;

                const stock: any = parseFloat(e.stock ? e.stock : 0); // Asegurar que es un número

                let rowClass = "bg-white"; // Por defecto, blanco
                if (cantidadCalculada > stock) {
                  rowClass = "bg-red-100"; // Rojo si excede el stock
                } else if (cantidadCalculada === stock) {
                  rowClass = "bg-yellow-100"; // Amarillo si es igual al stock
                }

                return (
                  <tr
                    key={index}
                    className={`${rowClass} border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Link href={`productos/${e.id}`}>{e.nombre}</Link>
                    </th>
                    <td className="px-6 py-4">{e.stock} KG</td>
                    <td className="px-6 py-4">
                      {cantidadCalculada.toFixed(2)} KG
                    </td>
                    <td className="flex items-center px-6 py-4">
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
                <td className="px-6 py-4">No hay registros</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
