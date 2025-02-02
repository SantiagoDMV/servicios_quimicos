"use client";

import {useState } from "react";
import { crearTipoClienteProveedor } from "@/app/services";
import { redirect } from "next/navigation";
export default function FormularioCrearTipoClienteProveedor() {
  const [nombre, setNombre] = useState<String>();


  const enviarTipo = async (e:any) => {
    try {
      const consulta = await crearTipoClienteProveedor({nombre})
      if(consulta)
        console.log('Tipo de usuario creado exitosamente')  
      else
        console.log('Error al intentar crear el tipo de usuario')  
      redirect('/clienteproveedor')
    } catch (error) {
      console.log(error)
    }
    
  }


  return (
    <>
      <form className="max-w-sm mx-auto" action={(e)=>enviarTipo(e)}>
      
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <input
            type="text"
            onChange={(e)=>setNombre(e.target.value)}
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
  < button>Enviar</button>
      </form>
    </>
  );
}

{/* <div className="mb-5">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Large input
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
         */}