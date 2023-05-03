'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblAdmin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblAdmin.init({
    vcName: DataTypes.STRING,
    vcEmail: DataTypes.STRING,
    numContact: DataTypes.INTEGER,
    btIsActive: DataTypes.BOOLEAN,
    btIsVerified: DataTypes.BOOLEAN,
    vcCompanyName: DataTypes.STRING,
    dtVerifiedAt: DataTypes.DATE,
    vcCompanyLocation: DataTypes.STRING,
    vcUsername: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblAdmin',
  });
  return tblAdmin;
};