// 📦 Importamos el módulo Router de Express para definir las rutas
const { Router } = require('express');

// Importamos los métodos del controlador de autenticación
const { register, login, protectedRoute } = require('../controllers/authController');

// Importamos el middleware que verifica el token JWT
const authenticateToken = require('../middlewares/auth');

// Inicializamos un enrutador de Express
const router = Router();

// Definición de la ruta POST /register para registrar un nuevo usuario
// Llama al controlador 'register' para crear un usuario
router.post('/register', register);

// Definición de la ruta POST /login para autenticar a un usuario
// Llama al controlador 'login' para verificar las credenciales y generar un token
router.post('/login', login);

// Definición de la ruta GET /protected-route para acceder a una ruta protegida
// Llama al middleware 'authenticateToken' para verificar el token JWT
// Si el token es válido, permite el acceso a la ruta protegida
router.get('/protected-route', authenticateToken, protectedRoute);

// Exportamos el enrutador para que pueda ser utilizado en el archivo principal de rutas
module.exports = router;
