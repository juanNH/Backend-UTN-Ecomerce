import { Sequelize } from "sequelize";
import { sequelize } from './conection';

const CategoriesModel = require("./models/categories");

const Categories = CategoriesModel(sequelize, Sequelize);

const syncDb = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Tablas sincronizadas");
    await sequelize.close();
    console.log("DB desconectada");
  } catch (err) {
    throw err;
  }
};
syncDb();
