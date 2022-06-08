const express = require ('express');
const { append } = require('express/lib/response');
const mysql = require('mysql2');
const db = require('.');
require('dotenv').config();

const PORT = process.env.PORT || 3308;

const app = express();

const connection = mysql.createConnection(
  {
      host: 'localhost',
      // Your MySQL username,
      user: process.env.DB_USER,
      // Your MySQL password
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    console.log('Connected to employees')
  );

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
})
  
  module.exports = connection;
