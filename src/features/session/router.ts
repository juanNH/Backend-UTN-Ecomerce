import express from "express";
import { login } from "./controllers/login";
export const sessionRouter = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Example:
 *      type: object
 *      properties:
 *        type:
 *          type: string
 *          description: Type of example
 *        description:
 *           type: string
 *           description: description of example
 *      required:
 *        - type
 *        - description
 *      example:
 *        type: example
 *        description: example scheme!!
 */

/**
 * @swagger
 * /ping:
 *  get:
 *    summary: ping the server to check if connection is avilable
 *    tags: []
 *    requestBody:
 *      required: false
 *    responses:
 *      200:
 *        description: pinged correctly!!
 */
sessionRouter.post("/login", login);


