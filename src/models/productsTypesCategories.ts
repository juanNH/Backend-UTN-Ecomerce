import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const ProductsTypesCategories = sequelize.define(
  "ProductsTypesCategories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);
