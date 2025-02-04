import Crear from "../components/Botones/Crear/Crear";
import { obtenerMateriasPrimas } from "../services";
import FormularioCrearMateriaPrima from "../components/Formularios/FormularioCrearMateriaPrima/FormularioCrearMateriaPrima";
import ListaMateriasPrimas from "../components/Tablas/MateriasPrimas/ListaMateriasPrimas";
export default async function MateriaPrima() {
  const materiasPrimas = await obtenerMateriasPrimas();
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
