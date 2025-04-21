// 📦 Importamos el módulo Router de Express para definir rutas de manera modular
const { Router } = require('express');

// 📦 Importamos el esquema de validación de usuarios con Joi
const { userSchema } = require('../validators/userValidator');

// 📦 Middleware personalizado para aplicar validaciones
const validate = require('../middlewares/validate');

// 📦 Controladores que manejan la lógica de autenticación
const { register, login, protectedRoute } = require('../controllers/authController');

// 📦 Middleware que verifica la validez del token JWT para proteger rutas
const authenticateToken = require('../middlewares/auth');

// 🚀 Inicializamos una nueva instancia del enrutador de Express
const router = Router();

/**
 * @route   POST /register
 * @desc    Registro de nuevos usuarios
 * @access  Público
 * 
 * Valida el cuerpo del request usando Joi y, si es válido,
 * llama al controlador para registrar al usuario.
 */
router.post('/register', validate(userSchema), register);

/**
 * @route   POST /login
 * @desc    Autenticación de usuarios existentes
 * @access  Público
 * 
 * Verifica las credenciales y genera un token JWT si son válidas.
 */
router.post('/login', login);

/**
 * @route   GET /protected-route
 * @desc    Ruta de prueba protegida con JWT
 * @access  Privado
 * 
 * Usa el middleware `authenticateToken` para validar el token JWT.
 * Si el token es válido, permite el acceso a la función `protectedRoute`.
 */
router.get('/protected-route', authenticateToken, protectedRoute);

// 🚀 Exportamos el enrutador para que pueda ser utilizado en el archivo principal
module.exports = router;
