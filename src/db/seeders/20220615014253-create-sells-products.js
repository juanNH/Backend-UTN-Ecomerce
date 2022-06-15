'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const sellsProducts = [
      {
        idSell: 1,
        idProduct: 1,
      },
    ];
    await queryInterface.bulkInsert('SellsProducts', sellsProducts, {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('SellsProducts', null, {});
  }
};
