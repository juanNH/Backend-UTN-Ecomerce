'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const sells = [
      {
        code: 12,
        total: 99999.99,
        idUser: 1,
      },
    ];
    await queryInterface.bulkInsert('Sells', sells, {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Sells', null, {});
  }
};
