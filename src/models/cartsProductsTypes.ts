import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const CartsProductsTypes = sequelize.define(
  "CartsProductsTypes",
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
