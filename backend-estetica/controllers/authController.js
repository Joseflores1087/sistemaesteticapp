const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Simulando una base de datos en memoria
let users = []; 

// Registro de usuario
exports.register = async (req, res) => {
  const { username, password } = req.body;

  // Verificar si el usuario ya existe
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash de la contraseña
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Crear el nuevo usuario
  const newUser = { username, password: hashedPassword };
  users.push(newUser);

  return res.status(201).json({ message: 'User registered successfully' });
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
