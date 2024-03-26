const express = require("express");
require("dotenv/config.js");
const app = require("./src/app.js");
require("./src/database/index.js");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor funcionando!");
});
