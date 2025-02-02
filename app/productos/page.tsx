import FormularioCrearProducto from "../components/Formularios/FormularioCrearProducto/FormularioCrearProducto";
import ListaProductos from "../components/Tablas/Productos/ListaProductos";
import { obtenerProductos } from "../services";
import Link from "next/link";
import Precio from "../components/Precio/Precio";
import Crear from "../components/Botones/Crear/Crear";
export default async function Productos() {
  const productos = await obtenerProductos();
  //quiero cambiar el valor de ventana dependiendo si se esta dando click a un boton o no
  return (
    <div>
      <h1>Productos</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Crear children={<FormularioCrearProducto />} />
        </div>
        <div>
        {productos && (
            <ListaProductos producto={productos} />
        )}
      </div>
      </div>
  );
}
