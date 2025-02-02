import CardInformacion from "@/app/components/Cards/CardInformacion/CardInformacion";
import ListaMateriaProducto from "@/app/components/Tablas/ListaMateriaProducto/ListaMateriaProducto";
import CrearM from "@/app/components/Botones/CrearM/CrearM";
import {
  obtenerProducto,
  obtenermateriasPrimasIdProducto,
} from "@/app/services";
import ListaAgregarMateriasPrimasProducto from "@/app/components/Tablas/MateriasPrimas/AgregarMateriaPrimaProducto/ListaAgregarMateriaPrimaProducto";
import CrearPreparacion from "@/app/components/Botones/CrearPreparacion/CrearPreparacion";
import FormularioPreparacion from "@/app/components/Formularios/FormulariosActualizaciones/Productos/FormularioPreparacion";
import FormularioActPreparacion from "@/app/components/Formularios/FormulariosActualizaciones/Productos/FormularioActPreparacion";

export default async function ProductoId({
  params,
}: {
  params: Promise<{ [id: string]: string }>;
}) {
  const parametro = await params;
  const consulta = await obtenermateriasPrimasIdProducto(parametro.id);
  const producto = await obtenerProducto(parametro.id);
  return (
    <div className="min-w-ma">
      <CardInformacion productoObtenido={producto} />
      <div className="flex flex-2 flex-wrap min-w-full">
        {/* <div className="w-50 flex-auto"> */}
        <div className="min-w-full">
          <ListaMateriaProducto
            materiasPrimasProducto={consulta}
            producto={producto}
          />
          <CrearM
            children={
              <ListaAgregarMateriasPrimasProducto
                idProducto={parametro.id}
                materiasPrimasProducto={consulta}
              />
            }
            titulo={"Agregar Materia Prima"}
          />
        </div>
        {/* <div className="w-50 flex-auto">
          contenedor
        </div> */}
  

        <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
          {producto.preparacion ? (
            <div>
              <p className="text-gray-500">{producto.preparacion}</p>
              
<br />
<CrearPreparacion
              children={<FormularioActPreparacion producto={producto} />}
              titulo={"Editar Preparación"}
            />

            </div>
          ) : (
            <CrearPreparacion
              children={<FormularioPreparacion producto={producto} />}
              titulo={"Agregar Preparación"}
            />
          )}
        </div>
      </div>
    </div>
  );
}
