//! Para gestionar la conexión de la base de dato
//- Sequelize init -> config

const {Sequelize} = require("sequelize");
require("dotenv").config()

const db = new Sequelize({
    database: process.env.DB_NAME || "todo",
    username: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    password: process.env.DB_PASSWORD || "root",
    dialect: "postgres"
});

module.exports = db;