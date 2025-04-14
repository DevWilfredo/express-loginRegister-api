// 📦 Importamos el módulo Router de Express para definir las rutas
const { Router } = require('express');

// Importamos el enrutador de autenticación, que contiene las rutas relacionadas con el registro y login
const authRouter = require('./auth');

// Inicializamos un enrutador principal para gestionar las rutas
const router = Router();

// Usamos el enrutador de autenticación y lo asignamos a la ruta '/auth'.
// Esto significa que todas las rutas definidas en authRouter (por ejemplo, '/register', '/login')
// estarán bajo el prefijo '/auth', como '/auth/register' y '/auth/login'.
router.use('/auth', authRouter);

// Exportamos el enrutador para que pueda ser utilizado en la aplicación principal
module.exports = router;
