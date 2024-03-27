require("dotenv/config.js");
const app = require("./app.js");
require("./database/index.js");

const PORT = process.env.PORT | 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Servidor funcionando!");
});
