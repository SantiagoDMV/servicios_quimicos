import Crear from "../components/Botones/Crear/Crear";
import FormularioCrearClienteProveedor from "../components/Formularios/FormularioCrearClienteProveedor/FormularioCrearClienteProveedor";
import TipoCPLista from "../components/Cards/TiposCPLista/TiposCPLista";
import { obtenerClientes } from "../services";
import ListaClienteProveedor from "../components/Tablas/ClienteProveedores/ListaClienteProveedor";
export default async function ClienteProveedor() {
  const clientes = await obtenerClientes()  
  return (
    <div>
      <h1>Cliente Proveedor</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Crear children={<FormularioCrearClienteProveedor />} />
        {/* <TipoCPLista/> */}
      </div>
      <div>
      <ListaClienteProveedor clientes={clientes}/>
      </div>
    </div>
  );
}
