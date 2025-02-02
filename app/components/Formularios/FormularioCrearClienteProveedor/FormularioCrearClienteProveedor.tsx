"use client";

import { useState, useEffect } from "react";
import {
  obtenerTipoClienteProveedor,
} from "@/app/services";
import EnviarCrearFormularios from "../../Botones/EnviarFormularios/EnviarCrearFormularios";
import { Alertas } from "../../Alertas/Alertas";
export default function FormularioCrearClienteProveedor() {
  const [datos, setDatos] = useState<any>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    idTipo: 1,
  });
  const [tipos, setTipos] = useState<any[]>();
  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");

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
    <Alertas mensaje={mensajeAlerta} tipo={tipo} />
      <div className="max-w-sm mx-auto">
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
                onChange={(e) => handlers(e)}
                name="idTipo"
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

        <EnviarCrearFormularios
          tipo={"clienteProveedor"}
          datos={datos}
          setTipo={setTipo}
          setMensajeAlerta={setMensajeAlerta}
        />
      </div>
    </>
  );
}
