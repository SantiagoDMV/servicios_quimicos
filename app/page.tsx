import Image from "next/image";

export default function Home() {
  function verificarConexion () {
    const conexion = fetch('http://127.0.0.1:3000/api/clienteProveedor')
    .then(result => {
      console.log(result)
    })
  }
  return (

      <h1>
        Hola mundo
      </h1>

  );
}
