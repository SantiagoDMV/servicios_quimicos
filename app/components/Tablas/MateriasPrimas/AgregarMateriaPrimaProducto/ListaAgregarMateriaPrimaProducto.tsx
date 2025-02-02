"use client";
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { Alertas } from "@/app/components/Alertas/Alertas";
import {
  obtenerMateriasPrimas,
  crearMateriaPrimaProducto,
} from "@/app/services";
import BuscadorRegistrosTabla from "@/app/components/Buscador/BuscadorLista/BuscadorRegistrosTabla";

export default function ListaAgregarMateriasPrimasProducto({
  idProducto,
  materiasPrimasProducto,
}: any) {
  const [productosFiltrados, setProductosFiltrados] = useState<any[]>();
  const [producto, setProducto] = useState<any[]>();
  const [productoId, setProductoId] = useState<any>();
  const [cantidad, setCantidad] = useState<any>();
  const [idsMateriasYaAgregadas, setIdsMateriasYaAgregadas] = useState<any[]>();
  const [materiasYaAgregadas, setMateriasYaAgregadas] = useState<any[]>();
  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");


  useEffect(() => {
    const obtenerRegistros = async () => {
      const consulta = await obtenerMateriasPrimas();
      const ids = materiasPrimasProducto.map((e: any) => e.id_materia);
      const filtrados = ids.map((id: any) => {
        const registro = consulta.filter(
          (c: any) => parseInt(c.id) == parseInt(id)
        );
        return registro[0];
      });
      setMateriasYaAgregadas(filtrados);
      setIdsMateriasYaAgregadas(ids);
      setProducto(consulta);
      setProductosFiltrados(consulta);
    };
    obtenerRegistros();
  }, []);

  useEffect(() => {
    const obtenermateriaspIdProducto = async () => {
      setProductoId(idProducto);
    };
    obtenermateriaspIdProducto();
  }, []);

  const agregarMateriaPrimaProducto = async (materiaPrimaId:number,existencia:boolean) => {
      const consulta = await crearMateriaPrimaProducto({
        productoId,
        materiaPrimaId,
        cantidad,
        existencia
      });

      if(consulta.status == 500){
        setTipo('Error')  
        setMensajeAlerta(consulta.mensaje)
    }else{
        setTipo('Success')  
      setMensajeAlerta(consulta.mensaje)
      // const href = window.location.href
      // window.location.href = href
    }
      return
    
  };

  return (
    <>
    <Alertas mensaje={mensajeAlerta} tipo={tipo} />
      <BuscadorRegistrosTabla
        registros={producto}
        setFiltro={setProductosFiltrados}
        titulo={"Materia Prima"}
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            {
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>

                <th scope="col" className="px-6 py-3">
                  Cantidad
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            }
          </thead>
          <tbody>
            {materiasYaAgregadas &&
              materiasYaAgregadas.map((m: any, index: number) => (
                <tr
                  key={index}
                  className="bg-green-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-150 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <Link href={`productos/${m.id}`}>{m.nombre}</Link>
                  </th>
                  <td className="px-6 py-4">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Cantidad
                      </label>
                      <input
                        type="number"
                        step={"0.01"}
                        id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        //placeholder="0.00"
                        placeholder={
                          materiasPrimasProducto.filter((e:any)=>
                          e.id_materia === m.id
                        )[0].cantidad}
                        required
                        onChange={(e) => setCantidad(e.target.value)}
                      />
                    </div>
                  </td>
                  <td className="flex items-center px-6 py-4">
                    <span
                      className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => agregarMateriaPrimaProducto(m.id,true)}
                    >
                      Modificar
                    </span>
                  </td>
                </tr>
              ))}

            {productosFiltrados && productosFiltrados.length > 0 ? (
              productosFiltrados.map((e: any, index: number) => {
                const bandera =
                  idsMateriasYaAgregadas &&
                  idsMateriasYaAgregadas.map(
                    (m: any) => parseInt(e.id) === parseInt(m)
                  );
                if (bandera?.includes(true)) return;
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <Link href={`productos/${e.id}`}>{e.nombre}</Link>
                    </th>
                    <td className="px-6 py-4">
                      <div>
                        <label
                          htmlFor="first_name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Cantidad
                        </label>
                        <input
                          type="number"
                          step={"0.01"}
                          id="first_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="0.00"
                          required
                          onChange={(e) => setCantidad(e.target.value)}
                        />
                      </div>
                    </td>
                    <td className="flex items-center px-6 py-4">
                      <span
                        className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => agregarMateriaPrimaProducto(e.id,false)}
                      >
                        Agregar
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
