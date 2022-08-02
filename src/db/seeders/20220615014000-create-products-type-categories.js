"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
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
      {
        idCategory: 1,
        idProductType: 3,
      },
      {
        idCategory: 1,
        idProductType: 4,
      },
      {
        idCategory: 3,
        idProductType: 5,
      },
      {
        idCategory: 1,
        idProductType: 5,
      },
    ];
    await queryInterface.bulkInsert(
      "ProductsTypesCategories",
      productsTypeCategory,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("ProductsTypesCategories", null, {});
  },
};
