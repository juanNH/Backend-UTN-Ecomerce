'use strict';
const dateTime = require('./../helpers/dateTime');
const randomCode = require('./../helpers/randomCode');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        code: randomCode(),
        name: 'Juan',
        surname: 'Herrera',
        userName: 'jherrera',
        password: '123456',
        createdAt: dateTime(),
        updatedAt: dateTime(),
        money: 6000,
      },
    ];
    await queryInterface.bulkInsert('Users', users, {});
   
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
