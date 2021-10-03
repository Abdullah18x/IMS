/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pmm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({PmmTokens,Order,Product}) {
      // define association here
      this.hasMany(PmmTokens)
      this.hasMany(Order)
      this.hasMany(Product)
    }
  }
  Pmm.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail:true
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      facebookLink: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      whatsAppNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Pmm",
    }
  );
  return Pmm;
};
