export function Success({mensaje}:{mensaje:string}) {
  return (
    <div
      className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
       {mensaje}
    </div>
  );
}


export function Error({mensaje}:{mensaje:string}) {
  return(
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
   {mensaje}
</div>
  )
}

export function Alertas({mensaje, tipo}:{mensaje:string,tipo:string}){
  if (mensaje == '')
  return
  switch(tipo){
    case 'Success':
      return  Success({mensaje})
    case 'Error':
      return  Error({mensaje})
  }
  
}