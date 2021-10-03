/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order}) {
      // define association here
      this.hasMany(Order)
    }
  };
  OrderStatus.init({
    status: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'OrderStatus',
  });
  return OrderStatus;
};