'use strict';

/** @type {import('sequelize-cli').Migration} */

// GENERAR UNA NUEVA MIGRACION
//npx sequelize-cli migration:generate --name add-nueva-columna
//APLICAR LA MIGRACION
//npx sequelize-cli db:migrate --url "mysql://root:@localhost:3306/app_sq"

module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.changeColumn('productos', 'precio', {
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: false
    // });
    // await queryInterface.changeColumn('productos', 'stock', {
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: false
    // });
    // await queryInterface.addColumn('productos', 'presentacion', { 
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: true
    // });
    // await queryInterface.addColumn('precios', 'precio', { 
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: false
    // });
    // await queryInterface.addColumn('pedidos', 'total', { 
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: false
    // });
    
    // await queryInterface.changeColumn('materiaprimas', 'precio', {
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: false
    // });
    // await queryInterface.changeColumn('materiaprimas', 'stock', {
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: false
    // });
    // await queryInterface.changeColumn('materiaprimas', 'cantidad_minima', {
    //   type: Sequelize.DECIMAL(10,2),
    //   allowNull: false
    // });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
