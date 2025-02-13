'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('productomateriaprimas', 'presentacion', { 
      type: Sequelize.DECIMAL(10,2),
      allowNull: true
    });
    await queryInterface.addColumn('productomateriaprimas', 'cantidad', { 
      type: Sequelize.DECIMAL(10,2),
      allowNull: true
    });
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
