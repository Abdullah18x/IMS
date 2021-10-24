/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Pmms', [{
      userName:'abd',
      email:'abd@gmail.com',
      name:'Abdullah Akram',
      facebookLink:'www.facebook.com',
      whatsAppNumber:'03000000000',
      password:'$2a$10$9PpAFn14lriAVBG3Wgri6upJEHwR0JDiJey67zVliFHZPwdUPSrIe'

    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Pmms', null, {});
  }
};
