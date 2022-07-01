import { DataTypes } from "sequelize";
import { sequelize } from "../db/conection";

export const SellsProducts = sequelize.define(
  "SellsProducts",
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
