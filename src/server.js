require("dotenv/config.js");
const app = require("./app.js");
require("./database/index.js");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor funcionando!");
});
