import { eliminarProducto,eliminarClienteProveedor,eliminarMateriaPrima,eliminarMateriaPrimaProductoIdMP } from "@/app/services";
import { Alertas } from "../Alertas/Alertas";
import { useState } from "react";
export default function VentanaConfirmacionEliminacion({
  tipoR,
  id,
  nombre,
  bandera,
  setBandera,
}: {
  tipoR: string;
  id: number;
  nombre: string;
  bandera: boolean;
  setBandera: any;
}) {
  const [mensaje, setMensaje] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");

  const enviarIdproducto = async () => {
    const consulta = await eliminarProducto(id);
    return consulta;
  };
  const enviarIdClienteProveedor = async () => {
    const consulta = await eliminarClienteProveedor(id);
    return consulta
  }
  const enviarIdMateriaPrima = async () => {
    const consulta = await eliminarMateriaPrima(id);
    return consulta
  };

  const enviarIdMateriaProducto = async () => {
    const consulta = await eliminarMateriaPrimaProductoIdMP(id);
    return consulta
    //redirect('/materiaprima')
  };

  const eliminarRegistro = async () => {
    let consulta: any;
    switch (tipoR) {
      case "producto":
        consulta = await enviarIdproducto();
        break;
      case 'clienteProveedor':
        consulta = await enviarIdClienteProveedor();
        break
      case 'materiaPrima':
        consulta = await enviarIdMateriaPrima()
      break
      case 'materiaProducto':
        consulta = await enviarIdMateriaProducto()
        break
    }
    if (consulta) {
      if (consulta.status == 500){
        setTipo("Error");
        setMensaje(consulta.mensaje);
      }else{
        setTipo("Success");
        setMensaje(consulta.mensaje);
      const href = window.location.href
     window.location.href = href
      }
    }  
    return;
  };
  
  return (
    <>
      {bandera && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
          >

          <div className="inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                      <svg
                        className="size-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-base font-semibold text-gray-900"
                        id="modal-title"
                      >
                        ¿Estás seguro de que deseas eliminar {nombre}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Esta acción no se puede deshacer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <Alertas mensaje={mensaje} tipo={tipo} />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={() => eliminarRegistro()}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Confirmar
                  </button>
                  <button
                    onClick={() => {
                      setMensaje('')
                      setBandera(!bandera)}}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
}
