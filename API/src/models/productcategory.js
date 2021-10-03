/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      // define association here
      this.belongsTo(Product)
    }
  };
  ProductCategory.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'ProductCategory',
  });
  return ProductCategory;
};