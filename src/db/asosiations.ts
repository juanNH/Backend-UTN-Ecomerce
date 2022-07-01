import {
  Carts,
  Categories,
  Products,
  ProductsTypes,
  Sells,
  Shops,
  Users,
} from "./../models";
import "./../models";
Categories.belongsToMany(ProductsTypes, {through: "ProductsTypesCategories", foreignKey: "idCategory"});
ProductsTypes.belongsToMany(Categories, {through: "ProductsTypesCategories", foreignKey: "idProductType"});

Shops.hasMany(ProductsTypes, {
  foreignKey: "idShop",
  sourceKey: "id",
});

ProductsTypes.belongsTo(Shops, {
  foreignKey: "idShop",
  targetKey: "id",
});

ProductsTypes.belongsToMany(Carts, {through: "CartsProductsTypes", foreignKey: "idProductType"});
Carts.belongsToMany(ProductsTypes, {through: "CartsProductsTypes", foreignKey: "idCart"});

ProductsTypes.hasMany(Products, {
  foreignKey: "idProductType",
  sourceKey: "id",
});

Products.belongsTo(ProductsTypes, {
  foreignKey: "idProductType",
  targetKey: "id",
});

Sells.belongsToMany(Products, {through: "SellsProducts", foreignKey: "idSell"});
Products.belongsToMany(Sells, {through: "SellsProducts", foreignKey: "idProduct"});

Users.hasMany(Sells, {
  foreignKey: "idUser",
  sourceKey: "id",
});

Sells.belongsTo(Users, {
  foreignKey: "idUser",
  targetKey: "id",
});

Users.hasOne(Carts, {
  foreignKey: "idUser",
  sourceKey: "id",
});

Carts.hasOne(Users, {
  foreignKey: "idCart",
  sourceKey: "id",
});

