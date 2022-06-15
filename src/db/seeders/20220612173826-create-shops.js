'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    const shops = [
      {
        code: 99,
        name: 'Tienda falsa',
        address: 'Calle falsa 123',
      },
      {
        code: 100,
        name: 'Tienda falsa2',
        address: 'Calle falsa 124',
      }
    ];
    await queryInterface.bulkInsert('Shops', shops, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Shops', null, {});
  }
};
