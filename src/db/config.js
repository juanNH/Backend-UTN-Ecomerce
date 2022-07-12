require('dotenv').config();
/* 
export const host = process.env.DATABASE_HOST === undefined ? "localhost" : process.env.DATABASE_HOST;
export const database = process.env.DATABASE_NAME === undefined ? "localdb" : process.env.DATABASE_NAME;
export const username = process.env.DATABASE_USER === undefined ? "root" : process.env.DATABASE_USER;
export const password = process.env.DATABASE_PASSWORD === undefined ? "" : process.env.DATABASE_PASSWORD;
export const port = process.env.DATABASE_PORT === undefined ? 3306 : parseInt(process.env.DATABASE_PORT);
export const dialect = "mysql";
export const define = {
    timestamps: true
} */

module.exports = {
    host: process.env.DATABASE_HOST || "localhost",
    database: process.env.DATABASE_NAME || "backendutnreact",
    username: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    port: process.env.DATABASE_PORT || 3306,
    dialect: "mysql",
    
    seederStoreage: "sequelize",
    seederStorageTableName: "SequelizeSeeds",

    define: {
        timestamps: true
    }
}