const mysql = require('mysql2')
require('dotenv').config()

const connection = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: process.env.DB_USER,
        // Your MySQL password
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
      },
      console.log('Connected to the election database.')
    );
  
  module.exports = connection;
