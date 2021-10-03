/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('OrderStatuses', [{
      status: 'ordered'
    },
    {
      status:'reviewed'
    },
    {
      status:'review submitted pending refund'
    },
    {
      status:'refunded'
    },
    {
      status:'refunded pending review'
    },
    {
      status:'on hold'
    },
    {
      status:'reviewed deleted'
    },
    {
      status:'cancelled'
    },
    {
      status:'commissioned '
    },
    {
      status:'completed'
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('OrderStatuses', null, {});
  }
};
