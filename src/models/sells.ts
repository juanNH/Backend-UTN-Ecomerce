import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const Sells = sequelize.define(
  "Sells",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: true }
);
