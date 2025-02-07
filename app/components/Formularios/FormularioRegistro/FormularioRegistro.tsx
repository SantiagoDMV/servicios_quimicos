"use client";
import { useState } from "react";
import EnviarCrearFormularios from "../../Botones/EnviarFormularios/EnviarCrearFormularios";
import { Alertas } from "../../Alertas/Alertas";
export default function FormularioRegistro() {
  const [datos, setDatos] = useState<any>({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
    email: "",
    password: "",
  });
  const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");

  const handlers = (e: any) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="min-h-full">
      <Alertas mensaje={mensajeAlerta} tipo={tipo}/>
      <div>
        <label>Nombre</label>
        <input type="text" name="nombre" onChange={(e) => handlers(e)} />
      </div>

      <div>
        <label>Apellido</label>
        <input type="text" name="apellido" onChange={(e) => handlers(e)} />
      </div>

      <div>
        <label>Cédula</label>
        <input type="text" name="cedula" onChange={(e) => handlers(e)} />
      </div>
      
      <div>
        <label>Télefono</label>
        <input type="text" name="telefono" onChange={(e) => handlers(e)} />
      </div>

      <div>
        <label>Email</label>
        <input type="email" name="email" onChange={(e) => handlers(e)} />
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" onChange={(e) => handlers(e)} />
      </div>
      <EnviarCrearFormularios tipo='usuario' datos={datos} setTipo={setTipo} setMensajeAlerta={setMensajeAlerta}/>    
    </div>
  );
}
