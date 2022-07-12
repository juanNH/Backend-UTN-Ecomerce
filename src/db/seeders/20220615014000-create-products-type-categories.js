'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const productsTypeCategory = [
      {
        idCategory: 2,
        idProductType: 1,
      },
      {
        idCategory: 2,
        idProductType: 2,
      },
      {
        idCategory: 3,
        idProductType: 1,
      },
      {
        idCategory: 3,
        idProductType: 2,
      },
    ];
    await queryInterface.bulkInsert('ProductsTypesCategories', productsTypeCategory, {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('ProductsTypesCategories', null, {});
  }
};
