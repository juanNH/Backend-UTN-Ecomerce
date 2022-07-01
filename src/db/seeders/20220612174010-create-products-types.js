'use strict';
const dateTime = require('./../helpers/dateTime');
const randomCode = require('./../helpers/randomCode');

module.exports = {
  async up(queryInterface, Sequelize) {
    const productsTypes = [
      {
        code: randomCode(),
        name: "Play station 5",
        amount: 1,
        price: 99999.99,
        idShop: 1,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        code: randomCode(),
        name: "Play station 4",
        amount: 1,
        price: 59999.99,
        idShop: 1,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      }
    ];
    await queryInterface.bulkInsert('ProductsTypes', productsTypes, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('ProductsTypes', null, {});
  }
};
