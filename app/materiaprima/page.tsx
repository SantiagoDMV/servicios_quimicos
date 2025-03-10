import Crear from "../components/Botones/Crear/Crear";
import FormularioCrearMateriaPrima from "../components/Formularios/FormularioCrearMateriaPrima/FormularioCrearMateriaPrima";
import ListaMateriasPrimas from "../components/Tablas/MateriasPrimas/ListaMateriasPrimas";
import { MateriaPrima } from '../models/index'
import { headers } from "next/headers";
export default async function MateriaPrimaPage() {
  headers()
  let materiasPrimas
  try {
    const materiasPrimasRaw = await MateriaPrima.findAll()
    materiasPrimas = materiasPrimasRaw.map(mp => mp.toJSON()); // Convierte los objetos Sequelize a JSON puro
} catch (error) {
    console.log('Error al intentar obtener los clientes/proveedores ', error)
    materiasPrimas = null  
}
  //const materiasPrimas = await obtenerMateriasPrimas();
  return (
    <>
      {materiasPrimas ? (
        <div>
          <h1>Materias Primas</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Crear children={<FormularioCrearMateriaPrima />} />
          </div>
          <div>
            {materiasPrimas && (
              <ListaMateriasPrimas producto={materiasPrimas} />
            )}
          </div>
        </div>
      ):
      (<p>Cargando pagina</p>)
      }
    </>
  );
}
