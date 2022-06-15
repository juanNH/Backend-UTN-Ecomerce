import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const Sells = sequelize.define(
  "Sells",
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
    total: {
      type: DataTypes.FLOAT,
    },
  },
  { timestamps: true }
);
