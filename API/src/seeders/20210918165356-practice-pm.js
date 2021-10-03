/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Pms', [{
      userName:'abd',
      email:'abd@gmail.com',
      name:'Abdullah Akram',
      password:'$2a$10$ExpaXFkitfKnEcTNuXtIseD0N.YFucHwp04LP7zGq24lo.71UKBHG',
      gender:'male',
      address:'abcd street',
      city:'Islamabad',
      country:'Pakistan',
      phone:'03000000000',
      bankName:'UBL',
      accountNo:'UBL02323421342342342342342342342',

    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pms', null, {});
  }
};
