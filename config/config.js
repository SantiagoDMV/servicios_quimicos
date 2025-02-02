import { Sequelize } from "sequelize";

const sequelize = new Sequelize('u171237022_sq', 'u171237022_rm', 'GUSTAVo2000', {
  dialectModule: require('mysql2'),
  host: 'brothersstore.ecuabrothers.com',
  port: 3306,
  dialect: 'mysql'
});

//Probar la conexión
// const probarConexion = async () => {
//   try {
//     await conexion.authenticate();
//     console.log("Conexión establecida con éxito a SQL Server");
//   } catch (error) {
//     console.error("No se pudo conectar a la base de datos:", error);
//   }
// };

// //Ejecuta la prueba solo si estás depurando
// probarConexion();

export default sequelize;
