import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const Carts = sequelize.define(
  "Carts",
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
  },
  { timestamps: true }
);
