import dotenv from "dotenv";
dotenv.config();
export const PORT: number = process.env.PORT === undefined ? 4000 : parseInt(process.env.PORT);
export const SECRET: string = process.env.SECRET === undefined ? 'Un secreto muy secreto' : process.env.SECRET;
export const EXPIRES: string = process.env.EXPIRES === undefined ? '3h' : process.env.EXPIRES;
