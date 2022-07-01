'use strict';
const dateTime = require('./../helpers/dateTime');
const randomCode = require('./../helpers/randomCode');

module.exports = {
  async up(queryInterface, Sequelize) {

    const shops = [
      {
        code: randomCode(),
        name: 'Tienda falsa',
        address: 'Calle falsa 123',
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        code: 100,
        name: 'Tienda falsa2',
        address: 'Calle falsa 124',
        createdAt: dateTime(),
        updatedAt: dateTime(),
      }
    ];
    await queryInterface.bulkInsert('Shops', shops, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Shops', null, {});
  }
};
