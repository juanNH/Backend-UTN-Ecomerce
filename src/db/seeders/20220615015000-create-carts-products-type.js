'use strict';
const dateTime = require('./../helpers/dateTime');
module.exports = {
  async up (queryInterface, Sequelize) {
    const CartsProductsTypes = [
      {
        idCart: 1,
        idProductType: 1,
      },
      {
        idCart: 1,
        idProductType: 2,
      },
    ];
    await queryInterface.bulkInsert('CartsProductsTypes', CartsProductsTypes, {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('CartsProductsTypes', null, {});
  }
};
