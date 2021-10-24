/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      keyword: {
        type: Sequelize.STRING
      },
      PmmId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      soldBy: {
        type: Sequelize.STRING
      },
      brandName: {
        type: Sequelize.STRING
      },
      market: {
        type: Sequelize.STRING
      },
      ProductcategoryId: {
        type: Sequelize.INTEGER
      },
      commission: {
        type: Sequelize.INTEGER
      },
      pmnlCommission: {
        type: Sequelize.INTEGER
      },
      chineseSeller: {
        type: Sequelize.STRING
      },
      sellerName: {
        type: Sequelize.STRING
      },
      instructions: {
        type: Sequelize.STRING
      },
      refundCondition: {
        type: Sequelize.STRING
      },
      commissionCondition: {
        type: Sequelize.STRING
      },
      overallSaleLimit: {
        type: Sequelize.INTEGER
      },
      dailySaleLimit: {
        type: Sequelize.INTEGER
      },
      picture: {
        type: Sequelize.STRING
      },
      amazonPicture: {
        type: Sequelize.STRING
      },
      status:{
        defaultValue:0,
        type:Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};