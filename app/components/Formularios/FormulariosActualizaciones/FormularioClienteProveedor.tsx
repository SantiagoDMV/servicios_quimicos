"use client";

import { useState, useEffect } from "react";
import {
  actualizarClienteProveedor,
  obtenerTipoClienteProveedor,
} from "@/app/services";
import { Alertas } from "../../Alertas/Alertas";
import EnviarActualizarFormularios from "../../Botones/EnviarFormularios/EnviarActualizarFormularios";
export default function FormularioActualizarClienteProveedor({ cliente }: any) {
  const [datos, setDatos] = useState<any>({
    id: cliente[0].id,
    nombre: cliente[0].nombre,
    apellido: cliente[0].apellido,
    email: cliente[0].email,
    telefono: cliente[0].telefono,
    direccion: cliente[0].direccion,
    idTipo: cliente[0].id_tipo,
  });

  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");
  const [tipos, setTipos] = useState<any[]>();

  useEffect(() => {
    const obtenerTipos = async () => {
      const tiposObtenidos = await obtenerTipoClienteProveedor();
      setTipos(tiposObtenidos);
    };

    obtenerTipos();
  }, []);

  const handlers = (e: any) => {
    setDatos((datos: any) => ({
      ...datos,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      {cliente && (
        <div className="max-w-sm mx-auto">
              <Alertas mensaje={mensajeAlerta} tipo={tipo} />
          <div className="md:flex gap-4">
            <div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  onChange={(e) => handlers(e)}
                  value={`${datos.nombre ? datos.nombre : ""}`}
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  onChange={(e) => handlers(e)}
                  value={`${datos.apellido ? datos.apellido : ""}`}
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => handlers(e)}
                  value={`${datos.email ? datos.email : ""}`}
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                />
              </div>
            </div>

            <div>
              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  name="telefono"
                  onChange={(e) => handlers(e)}
                  value={`${datos.telefono ? datos.telefono : ""}`}
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  onChange={(e) => handlers(e)}
                  value={`${datos.direccion ? datos.direccion : ""}`}
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="countries_disabled"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tipo de usuario
                </label>
                <select
                  name="idTipo"
                  onChange={(e) => handlers(e)}
                  value={`${datos.idTipo ? datos.idTipo : ""}`}
                  id="countries_disabled"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                >
                  {tipos &&
                    tipos.map((tipo: any, index: number) => (
                      <option key={index} value={tipo.id}>
                        {tipo.nombre}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>

          <EnviarActualizarFormularios tipo = {'clienteProveedor'} datos={datos} setTipo={setTipo} setMensajeAlerta={setMensajeAlerta}/>
        </div>
      )}
    </>
  );
}
