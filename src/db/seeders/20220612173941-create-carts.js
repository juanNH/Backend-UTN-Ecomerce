'use strict';
const dateTime = require('./../helpers/dateTime');
const randomCode = require('./../helpers/randomCode');

module.exports = {
  async up(queryInterface, Sequelize) {
    const carts = [
      {
        code: randomCode(),
        idUser: 1,
        createdAt: dateTime(),
        updatedAt: dateTime(),
      }
    ];
    await queryInterface.bulkInsert('Carts', carts, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Carts', null, {});
  }
};
