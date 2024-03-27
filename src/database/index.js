const { Sequelize } = require("sequelize");
require("dotenv/config.js");
const pg = require("pg");

const Employee = require("../models/Employee.js");
const Appointment = require("../models/Appointment.js");
const Patient = require("../models/Patient.js");
const Doctor = require("../models/Doctor.js");

const config = {
  host: "desafio5.postgres.database.azure.com",
  username: "postgree",
  password: "modal12#GR",
  port: 5432,
  database: "postgres",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
};

const { username, password, database } = config;

const connection = new Sequelize(database, username, password, {
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  host: config.host,
  dialect: config.dialect,
  dialectModule: pg,
  port: 5432,
  ssl: true,
});

async function connectionDatabase() {
  try {
    await connection.authenticate();
    console.log("Banco conectado");
  } catch (error) {
    console.log(config.password);
    console.error("Deu ruim!", error);
  }
}

Employee.init(connection);
Appointment.init(connection);
Patient.init(connection);
Doctor.init(connection);

(module.exports = connectionDatabase), connection;
