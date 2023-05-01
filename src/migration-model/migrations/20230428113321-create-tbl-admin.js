'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblAdmins', {
      intAdminId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numContact: {
        type: Sequelize.NUMERIC
      },
      vcEmail: {
        type: Sequelize.STRING
      },
      vcUsername: {
        type: Sequelize.STRING
      },
      vcLocation: {
        type: Sequelize.STRING
      },
      ntaddress: {
        type: Sequelize.DataTypes.TEXT('medium')
      },
      vcName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tblAdmins');
  }
};