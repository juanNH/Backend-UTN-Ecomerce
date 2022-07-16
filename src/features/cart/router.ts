import express from "express";
import { auth } from "../../middlewares";
import { addToCart, getCart, removeToCart } from "./controllers";
export const cartRouter = express.Router();

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
cartRouter.get("/cart", getCart);
cartRouter.put("/addNew", auth, addToCart);
cartRouter.delete("/remove", auth, removeToCart);

