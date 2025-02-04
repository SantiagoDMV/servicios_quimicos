import Crear from "../components/Botones/Crear/Crear";
import FormularioCrearClienteProveedor from "../components/Formularios/FormularioCrearClienteProveedor/FormularioCrearClienteProveedor";
//import { obtenerClientes } from "../services";
import { ClienteProveedor } from '../models/index'
import ListaClienteProveedor from "../components/Tablas/ClienteProveedores/ListaClienteProveedor";

export default async function ClienteProveedorPage() {
  let clientes
  try {
    const clientesRaw = await ClienteProveedor.findAll()
    clientes = clientesRaw.map(cliente => cliente.toJSON()); // Convierte los objetos Sequelize a JSON puro
} catch (error) {
    console.log('Error al intentar obtener los clientes/proveedores ', error)
    clientes = null  
}
  return (
    <>
      {clientes ? (
        <div>
          <h1>Cliente Proveedor</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Crear>
              <FormularioCrearClienteProveedor />
            </Crear>
          </div>
          <div>
            <ListaClienteProveedor clientes={clientes} />
          </div>
        </div>
      ):
      (<p>Cargando pagina</p>)
      }
    </>
  );
}
