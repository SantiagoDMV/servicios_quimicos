export default function BuscadorRegistrosTabla({registros,setFiltro,titulo}:any){
    const filtrar = (cadena: string) =>{
        const registrosFiltrados = registros.filter((r:any)=> 
        r.nombre.toLowerCase().includes(cadena.toLowerCase())
        )
        setFiltro(registrosFiltrados)
    }

    return(
        // <div className="mt-4 mb-4 p-4  bg-white border rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="mt-5 mb-5 bg-white text-black">
        {/* <h3>Buscar {titulo ? titulo : ''}</h3> */}
        {/* <div
        className="mt-2 p-2.5 flex items-center rounded-md duration-300 cursor-pointer bg-white text-black  "
      > */}
        <i className="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Buscar"
          className="text-[15px] w-full bg-transparent focus:outline-none border p-3 rounded-md"
          onChange={(e)=>filtrar(e.target.value)}
        />
      {/* </div> */}
      </div>
    )
}