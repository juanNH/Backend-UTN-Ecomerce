'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [
      {
        barCode: 12345,
        idProductType: 1,
      }
    ];
    await queryInterface.bulkInsert('Products', products, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {});
  }
};
