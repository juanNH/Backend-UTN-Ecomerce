import dotenv from "dotenv";
dotenv.config();
export const PORT: number = process.env.PORT === undefined ? 4000 : parseInt(process.env.PORT);
