'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblAdmins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vcName: {
        type: Sequelize.STRING
      },
      vcEmail: {
        type: Sequelize.STRING
      },
      numContact: {
        type: Sequelize.BIGINT
      },
      btIsActive: {
        type: Sequelize.BOOLEAN
      },
      btIsVerified: {
        type: Sequelize.BOOLEAN
      },
      vcCompanyName: {
        type: Sequelize.STRING
      },
      dtVerifiedAt: {
        type: Sequelize.DATE
      },
      vcCompanyLocation: {
        type: Sequelize.STRING
      },
      vcUsername: {
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