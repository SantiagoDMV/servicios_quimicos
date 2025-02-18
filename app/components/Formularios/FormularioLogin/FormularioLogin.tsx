"use client";
import { useState } from "react";
import { loginUsuario } from "@/app/services";
import { Alertas } from "../../Alertas/Alertas";

export default function FormularioLogin() {
  const [datos, setDatos] = useState({ email: "", password: "" });
  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");

  const handlers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const iniciarSesion = async () => {
    try {
      const { email, password } = datos;
      const consulta = await loginUsuario({ email, password });
      if (consulta.status === 500) {
        setTipo("Error");
        setMensajeAlerta(consulta.mensaje);
      } else {
        setTipo("Success");
        setMensajeAlerta(consulta.mensaje);
        window.location.href = "/productos";
      }  
    } catch (error) {
      setTipo("Error");
        setMensajeAlerta('Error al intentar iniciar sesión');
    }
    
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Servicios Químicos
        </h2>
        <h2 className="font-semibold text text-gray-800 mb-4">
          Iniciar Sesión
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            value={datos.email}
            onChange={handlers}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={datos.password}
            onChange={handlers}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Alertas mensaje={mensajeAlerta} tipo={tipo} />
        <button
          onClick={iniciarSesion}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-all"
        >
          Ingresar
        </button>
        
      </div>
      
    </div>
  );
}
