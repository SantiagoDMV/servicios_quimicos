import FormularioCrearProducto from "../components/Formularios/FormularioCrearProducto/FormularioCrearProducto";
import ListaProductos from "../components/Tablas/Productos/ListaProductos";
import { Producto } from '../models/index'
import Crear from "../components/Botones/Crear/Crear";
import { headers } from "next/headers";

export default async function Productos() {
  //const productos = await obtenerProductos();
  headers()
  let productos
  try {
    const productosRaw = await Producto.findAll()
    productos = productosRaw.map(producto => producto.toJSON()); // Convierte los objetos Sequelize a JSON puro
} catch (error) {
    console.log('Error al intentar obtener los clientes/proveedores ', error)
    productos = null  
}
  return (
    <>
      {productos ? (
        <div>
          <h1>Productos</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Crear children={<FormularioCrearProducto />} />
          </div>
          <div>{productos && <ListaProductos producto={productos} />}</div>
        </div>
      ) : (
        <p>Cargando pagina</p>
      )}
    </>
  );
}
