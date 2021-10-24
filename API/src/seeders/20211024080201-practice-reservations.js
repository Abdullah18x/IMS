/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Reservations', [
       {
        PmmId: 1,
        PmId: 1,
        ProductId: 1
       },
       {
        PmmId: 1,
        PmId: 1,
        ProductId: 2
       }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Reservations', null, {});
  }
};
