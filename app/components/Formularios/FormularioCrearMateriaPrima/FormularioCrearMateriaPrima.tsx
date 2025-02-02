"use client";

import {useState,useEffect } from "react";
import { obtenerClientes } from "@/app/services";
import { Alertas } from "../../Alertas/Alertas";
import EnviarCrearFormularios from "../../Botones/EnviarFormularios/EnviarCrearFormularios";
export default function FormularioCrearMateriaPrima() {

  const [datos, setDatos] = useState<any>({
    nombre: "",
    descripcion: "",
    stock: 0.0,
    precio: 0.0,
    cantidad_minima : 0.0,
    idProveedor: 0
  });

  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");
  const [clientes,setClientes] = useState<any[]>()

    useEffect(()=>{
      const obtenerTipos = async () =>{
        const tiposObtenidos = await obtenerClientes()
        setClientes(tiposObtenidos)
      }
      obtenerTipos()
    },[])

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
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descripción
          </label>
          <input
            type="text"
            id="large-input"
            name="descripcion"
            onChange={(e) => handlers(e)}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
    


        <div className="mb-5">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stock
          </label>
          <input
            type="number"
            name="stock"
            onChange={(e) => handlers(e)}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Precio
          </label>
          <input
            type="number"
            name="precio"
            onChange={(e) => handlers(e)}
            id="small-input"
            step={'0.01'}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cantidad Minima
          </label>
          <input
            type="number"
            name="cantidad_minima"
            onChange={(e) => handlers(e)}
            id="small-input"
            step={'0.01'}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>


        <div className="mb-5">

<label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de usuario</label>
<select 
name="idProveedor"
onChange={(e) => handlers(e)}
id="countries_disabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option value={0}>Elije un proveedor</option>
{
clientes && clientes.map((tipo:any, index:number) => (
<option key={index} value={tipo.id}>{tipo.nombre}</option>
))
}
</select>        
</div>
        <EnviarCrearFormularios tipo = {'materiaPrima'} datos={datos} setTipo={setTipo} setMensajeAlerta={setMensajeAlerta}/>
      </div>
    </>
  );
}
