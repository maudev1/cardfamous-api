'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cards', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },
      name: {
        type: Sequelize.STRING,
        allowNull: false

      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      level: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },

      str: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      dex: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      int: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cards');

  }
};
