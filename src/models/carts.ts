import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const Carts = sequelize.define(
  "Carts",
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
  },
  { timestamps: true }
);
