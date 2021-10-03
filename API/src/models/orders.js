/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({OrderStatus,Pmm,Pm,Product}) {
      // define association here
      this.belongsTo(OrderStatus)
      this.belongsTo(Pmm)
      this.belongsTo(Pm)
      this.belongsTo(Product)
    }
  };
  Order.init({
    orderNumber: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false
    },
    PmmId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    PmId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    customerEmail: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    ProductId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    amzReviewLink: {
      type:DataTypes.STRING,
    },
    market: {
      type:DataTypes.STRING,
    },
    reviewDate: {
      type:DataTypes.DATE,
    },
    refundDate: {
      type:DataTypes.DATE,
    },
    SellerId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    commission: {
      type:DataTypes.INTEGER,
    },
    remarks: {
      type:DataTypes.STRING,
    },
    chineseSeller: {
      type:DataTypes.STRING,
    },
    orderPicture: {
      type:DataTypes.STRING,
    },
    refundPicture: {
      type:DataTypes.STRING,
    },
    reviewPicture: {
      type:DataTypes.STRING,
    },
    OrderstatusId:{
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};