// Registro de usuario
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const connection = require('../config/db');
const moment = require('moment'); // Para manejar la fecha

dotenv.config();
let users = []; 

// Registro de usuario
exports.register = async (req, res) => {
  const { nombre_apellido, perfil, password } = req.body;

  // Verificar si el usuario ya existe
  connection.query('SELECT * FROM Usuarios WHERE nombre_apellido = ?', [nombre_apellido], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Establecer la fecha de creación y modificación
    const fecha_creacion = moment().format('YYYY-MM-DD HH:mm:ss');
    const fecha_modificacion = fecha_creacion; // Es la misma fecha al principio

    // Insertar el nuevo usuario en la base de datos
    connection.query(
      'INSERT INTO Usuarios (nombre_apellido, perfil, password, estado, fecha_creacion, fecha_modificacion) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre_apellido, perfil, hashedPassword, 'activo', fecha_creacion, fecha_modificacion],
      (err, results) => {
        if (err) {
          return res.status(500).json({ message: 'Database error', error: err });
        }
        return res.status(201).json({ message: 'User registered successfully' });
      }
    );
  });
};
// Actualizar el estado o la información del usuario
exports.updateUser = async (req, res) => {
  const { id, nombre_apellido, perfil, estado } = req.body;
  
  const fecha_modificacion = moment().format('YYYY-MM-DD HH:mm:ss'); // Fecha actual de modificación

  // Actualizar el usuario en la base de datos
  connection.query(
    'UPDATE Usuarios SET nombre_apellido = ?, perfil = ?, estado = ?, fecha_modificacion = ? WHERE id = ?',
    [nombre_apellido, perfil, estado, fecha_modificacion, id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({ message: 'User updated successfully' });
    }
  );
};
// Inicio de sesión (login)
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Buscar al usuario
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Verificar la contraseña
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generar JWT
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return res.json({ message: 'Login successful', token });
};
