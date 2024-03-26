require("dotenv/config.js");
const app = require("./app.js");
require("./database/index.js");

const PORT = 3000;

app.listen(process.env.PORT | 3333, "0.0.0.0", () => {
  console.log("Servidor funcionando!");
});
