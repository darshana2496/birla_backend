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
    numContact: DataTypes.NUMERIC,
    vcEmail: DataTypes.STRING,
    vcUsername: DataTypes.STRING,
    vcLocation: DataTypes.STRING,
    ntaddress: DataTypes.STRING,
    vcName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblAdmin',
  });
  return tblAdmin;
};