'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      {
        code: 123,
        name: 'Muebles',
      },
      {
        code: 124,
        name: 'Electronica',
      }
    ];
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Categories', null, {});
  }
};
