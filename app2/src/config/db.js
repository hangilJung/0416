const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_password,
    database: process.env.DB_database
});

db.connect();

module.exports = db;