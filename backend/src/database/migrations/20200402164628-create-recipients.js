'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      street: {
        type: Sequelize.STRING,
        allowNull: false
      },

      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },

      complement: {
        type: Sequelize.STRING,
      },
      
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },

      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('recipients');
  }
};
