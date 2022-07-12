import express from "express";
import { PORT } from "./config/config";
import routes from "./routes";
const app = express();
import path from "path";
import { sequalizeConection } from "./db/conection";
//routers
import { productsRouter, cartRouter } from "./features";

sequalizeConection();
// swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.ts")}`],
};
// middlewares
app.use(express.json());
app.use("/", routes);
app.use("/products", productsRouter);
app.use("/cart", cartRouter);

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
