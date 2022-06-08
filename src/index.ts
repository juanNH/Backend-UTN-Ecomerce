import express from "express";
const { PORT } = require("./config/config");
const routes = require("./routes");
const app = express();
const path = require("path");
// swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
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
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
