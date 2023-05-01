'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tblUsers.init({
    intAdminId:DataTypes.INTEGER,
    vcName: DataTypes.STRING,
    vcEmail: DataTypes.STRING,
    vcUsername: DataTypes.STRING,
    vcLocation: DataTypes.STRING,
    ntaddress: DataTypes.STRING,
    nmContact: DataTypes.NUMERIC,
    btisVerify: DataTypes.BOOLEAN,
    dateVerifyOn: DataTypes.DATE,
    btisActive: DataTypes.BOOLEAN,
    vcparentName: DataTypes.STRING,
    vcuserType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblUsers',
  });
  return tblUsers;
};