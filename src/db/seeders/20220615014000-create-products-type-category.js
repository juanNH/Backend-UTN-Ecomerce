'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const productsTypeCategory = [
      {
        idCategory: 1,
        idProductType: 1,
      },
    ];
    await queryInterface.bulkInsert('ProductsTypeCategory', productsTypeCategory, {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('ProductsTypeCategory', null, {});
  }
};
