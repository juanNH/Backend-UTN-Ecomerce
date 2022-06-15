'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const carts = [
      {
        code: 444,
        idUser: 1,
      }
    ];
    await queryInterface.bulkInsert('Carts', carts, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Carts', null, {});
  }
};
