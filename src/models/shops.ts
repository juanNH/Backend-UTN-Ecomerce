import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const Shops = sequelize.define(
  "Shops",
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
    address: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);
