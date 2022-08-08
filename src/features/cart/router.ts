import express from "express";
import { auth } from "../../middlewares";
import { addToCart, getCart, payCart, removeToCart } from "./controllers";
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
cartRouter.get("/cart",auth, getCart);
cartRouter.post("/addNew", auth, addToCart);
cartRouter.delete("/remove", auth, removeToCart);
cartRouter.post("/pay", auth, payCart);


