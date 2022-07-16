import { Sequelize } from "sequelize";
import {
  host,
  database,
  password,
  port,
  username,
  dialect,
} from "./config";


export const sequelize = new Sequelize({
  host: host,
  port: port,
  username: username,
  password: password,
  database: database,
  dialect: dialect,
});
import './asosiations.ts';

export const sequalizeConection = async () => {
  try {
    await sequelize.authenticate();
   // await sequelize.sync({force:true});
    console.log("Connection has been established successfully.");
  } catch (error) { 
    console.error("Unable to connect to the database:", error);
  }
};
