'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblUsers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
      },
      intAdminId:{
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'tblAdmins',
          key: 'intAdminId'
      }
      },
      vcName: {
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      vcName: {
        type: Sequelize.STRING
      },
      nmContact: {
        type: Sequelize.NUMERIC
      },
      btisVerify: {
        type: Sequelize.BOOLEAN
      },
      dateVerifyOn: {
        type: Sequelize.DATE
      },
      btisActive: {
        type: Sequelize.BOOLEAN
      },
      vcparentName: {
        type: Sequelize.STRING
      },
      vcuserType: {
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
    })
   
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tblUsers');
  }
};