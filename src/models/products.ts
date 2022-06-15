import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    barCode: {
      type: DataTypes.INTEGER,
      unique: true,
    },
  },
  { timestamps: true }
);
