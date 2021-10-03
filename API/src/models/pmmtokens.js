"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PmmTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Pmm }) {
      this.belongsTo(Pmm);
    }
  }
  PmmTokens.init(
    {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PmmId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PmmTokens",
    }
  );
  return PmmTokens;
};
