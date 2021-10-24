/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Pmm,Pm,Product}) {
      this.belongsTo(Pmm);
      this.belongsTo(Pm);
      this.belongsTo(Product);
    }
  }
  Reservation.init(
    {
      PmmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Reservation",
    }
  );
  return Reservation;
};
