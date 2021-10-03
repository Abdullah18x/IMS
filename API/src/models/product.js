/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Pmm,ProductCategory,Order}) {
      // define association here
      this.belongsTo(Pmm)
      this.hasMany(ProductCategory)
      this.hasMany(Order)
    }
  };
  Product.init({
    keyword: {
      type: DataTypes.STRING
    },
    PmmId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    soldBy: {
      type: DataTypes.STRING
    },
    brandName: {
      type: DataTypes.STRING
    },
    market: {
      type: DataTypes.STRING
    },
    ProductcategoryId: {
      type: DataTypes.INTEGER
    },
    commission: {
      type: DataTypes.INTEGER
    },
    chineseSeller: {
      type: DataTypes.STRING
    },
    sellerName: {
      type: DataTypes.STRING
    },
    instructions: {
      type: DataTypes.STRING
    },
    refundCondition: {
      type: DataTypes.STRING
    },
    commissionCondition: {
      type: DataTypes.STRING
    },
    overallSaleLimit: {
      type: DataTypes.INTEGER
    },
    dailySaleLimit: {
      type: DataTypes.INTEGER
    },
    picture: {
      type: DataTypes.STRING
    },
    amazonPicture: {
      type: DataTypes.STRING
    },
    status:{
      defaultValue:0,
      type:DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};