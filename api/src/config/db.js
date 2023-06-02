require('dotenv').config();
const mysql = require('mysql2/promise');

// const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.getConnection().catch(() => {
  console.warn('Warning: DB failed');
});

module.exports = db;
