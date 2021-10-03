/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('ProductCategories', [{
        name: 'general'
      },
      {
        name:'electronics'
      },
      {
        name:'health and beauty'
      },
      {
        name:'baby'
      },
      {
        name:'gaming devices'
      },
      {
        name:'fashion'
      },
      {
        name:'mobile accessories'
      },
      {
        name:'expensive products'
      },
      {
        name:'pet related'
      },
      {
        name:'home and kitchen'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
