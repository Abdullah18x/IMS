/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('PmmTokens', [{
      PmmId:1,
      token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiZEBnbWFpbC5jb20iLCJpYXQiOjE2MzE0NjQyNDR9.ktMADQcwTauDzVVOEZy62A-lova46hdUzFvu5QxsyPg"

    }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('PmmTokens', null, {});
  }
};
