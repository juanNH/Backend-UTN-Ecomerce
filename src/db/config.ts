import dotenv from "dotenv";
import { Dialect } from "sequelize/types";
dotenv.config();

export const DATABASE_HOST: string = process.env.DATABASE_HOST === undefined ? "localhost" : process.env.DATABASE_HOST;
export const DATABASE_NAME: string = process.env.DATABASE_NAME === undefined ? "localdb" : process.env.DATABASE_NAME;
export const DATABASE_USER: string = process.env.DATABASE_USER === undefined ? "root" : process.env.DATABASE_USER;
export const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD === undefined ? "" : process.env.DATABASE_PASSWORD;
export const DATABASE_PORT: number = process.env.DATABASE_PORT === undefined ? 3306 : parseInt(process.env.DATABASE_PORT);
export const DATABASE_DIALECT: Dialect = "mysql";
