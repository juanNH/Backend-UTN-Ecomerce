import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const ProductsTypes = sequelize.define(
  "ProductsTypes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true }
);
