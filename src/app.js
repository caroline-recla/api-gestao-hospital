const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const connectionDatabase = require("./database/index.js");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");

(async () => {
  await connectionDatabase();
})();

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(express.json());
app.use(cors());
routes(app);

module.exports = app;
