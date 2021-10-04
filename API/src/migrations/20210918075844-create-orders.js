/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderNumber: {
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false
      },
      PmmId:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      PmId:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      customerEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amzReviewLink: {
        type: Sequelize.STRING,
      },
      market: {
        type: Sequelize.STRING,
      },
      reviewDate: {
        type: Sequelize.DATE,
      },
      refundDate: {
        type: Sequelize.DATE,
      },
      SellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      commission: {
        type: Sequelize.INTEGER,
      },
      remarks: {
        type: Sequelize.STRING,
      },
      chineseSeller: {
        type: Sequelize.STRING,
      },
      orderPicture: {
        type: Sequelize.STRING,
      },
      refundPicture: {
        type: Sequelize.STRING,
      },
      reviewPicture: {
        type: Sequelize.STRING,
      },
      OrderstatusId: {
        type: Sequelize.INTEGER,
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
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
