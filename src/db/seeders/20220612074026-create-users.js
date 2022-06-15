'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        code: 321,
        name: 'Juan',
        surname: 'Herrera',
        userName: 'jherrera',
        password: '123456',
      },
    ];
    await queryInterface.bulkInsert('Users', users, {});
   
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
