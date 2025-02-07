'use client'
import { useState } from "react"
import { loginUsuario } from "@/app/services"
import { Alertas } from "../../Alertas/Alertas"
export default function FormularioLogin(){

    const [datos,setDatos] = useState<any>({   
        email: '',
        password: ''
    })
    const [mensajeAlerta, setMensajeAlerta] = useState<string>("");
  const [tipo, setTipo] = useState<string>("Success");

    
    const handlers = (e: any) =>{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
    })
    }
    const iniciarSesion = async () =>{
        const email = datos.email
        const password = datos.password
        const consulta = await loginUsuario({email,password})
        if(consulta.status == 500){
            setTipo('Error')  
            setMensajeAlerta(consulta.mensaje)
        }else{
            setTipo('Success')  
          setMensajeAlerta(consulta.mensaje)
          window.location.href = ('/productos')
        }
          return
    }
    return(
        <div>
    <Alertas mensaje={mensajeAlerta} tipo={tipo}/>
            <div>
                <label>email</label>
                <input type="email" 
                name= 'email'
                onChange={(e)=> handlers(e)}
                />
            </div>
            <div>
                <label>password</label>
                <input type="password" 
                name= 'password'
                onChange={(e)=> handlers(e)}
                />
            </div>
            <button onClick={()=> iniciarSesion()}>Ingresar</button>
        </div>
    )
}