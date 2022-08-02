'use strict';
const dateTime = require('./../helpers/dateTime');
const randomCode = require('./../helpers/randomCode');
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [
      {
        barCode: randomCode(),
        idProductType: 1,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        barCode: randomCode(),
        idProductType: 2,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        barCode: randomCode(),
        idProductType: 1,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        barCode: randomCode(),
        idProductType: 3,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        barCode: randomCode(),
        idProductType: 4,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        barCode: randomCode(),
        idProductType: 5,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
    ];
    await queryInterface.bulkInsert('Products', products, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {});
  }
};
