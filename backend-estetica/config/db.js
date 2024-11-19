// config/db.js
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',  // Cambia si tu base de datos está en otro host
  user: process.env.DB_USER || 'root',      // Tu usuario de MySQL
  password: process.env.DB_PASSWORD || '',  // Tu contraseña de MySQL
  database: process.env.DB_NAME || 'esteticas' // Nombre de tu base de datos
});

// Verificar la conexión
connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
