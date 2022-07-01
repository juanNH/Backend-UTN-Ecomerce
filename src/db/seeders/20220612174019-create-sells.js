'use strict';
const dateTime = require('./../helpers/dateTime');
const randomCode = require('./../helpers/randomCode');

module.exports = {
  async up (queryInterface, Sequelize) {
    const sells = [
      {
        code: randomCode(),
        total: 99999.99,
        idUser: 1,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
    ];
    await queryInterface.bulkInsert('Sells', sells, {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Sells', null, {});
  }
};
