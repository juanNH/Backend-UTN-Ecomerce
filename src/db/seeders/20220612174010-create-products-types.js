'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const productsTypes = [
      {
        code: 111,
        name: "Play station 5",
        amount: 1,
        price: 99999.99,
        idShop: 1,
      },
      {
        code: 112,
        name: "Play station 4",
        amount: 1,
        price: 59999.99,
        idShop: 1,
      }
    ];
    await queryInterface.bulkInsert('ProductsTypes', productsTypes, {});
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('ProductsTypes', null, {});
  }
};
