/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order,Reservation}) {
      // define association here
      this.hasMany(Order)
      this.hasMany(Reservation)
    }
  };
  Pm.init({
    name: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    bankName: {
      type: DataTypes.STRING
    },
    accountNo: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Pm',
  });
  return Pm;
};