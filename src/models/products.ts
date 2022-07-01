import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    barCode: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  { timestamps: true }
);
