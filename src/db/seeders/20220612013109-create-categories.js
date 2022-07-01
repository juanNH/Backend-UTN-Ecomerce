'use strict';
const dateTime = require('./../helpers/dateTime');
const randomCode = require('./../helpers/randomCode');

module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      {
        code: randomCode(),
        name: 'Muebles',
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        code: randomCode(),
        name: 'Electronica',
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
      {
        code: randomCode(),
        name: 'gaming',
        createdAt: dateTime(),
        updatedAt: dateTime(),
      },
    ];
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Categories', null, {});
  }
};
