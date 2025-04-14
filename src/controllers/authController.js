// 📦 Importación de funciones de servicio
const { loginUser, registerUser } = require('../services');

// Función para registrar un nuevo usuario
// Recibe los datos de la solicitud y maneja el registro del usuario
const register = async (req, res, next) => {
    try {
        // Se pasa el cuerpo de la solicitud (req.body) al servicio de registro
        const result = await registerUser(req.body);

        // Responde con el resultado del servicio: status y mensaje de respuesta
        res.status(result.status).json(result.response);
    } catch (error) {
        // Si ocurre un error, se pasa al siguiente middleware (manejo de errores)
        next(error);
    }
};

// Función para autenticar a un usuario (login)
// Recibe los datos de inicio de sesión y maneja la autenticación
const login = async (req, res, next) => {
    try {
        // Se pasa el cuerpo de la solicitud (req.body) al servicio de login
        const result = await loginUser(req.body);

        // Responde con el resultado de la autenticación (token JWT, mensaje, etc.)
        res.status(result.status).json(result.response);
    } catch (error) {
        // Si ocurre un error, se pasa al siguiente middleware (manejo de errores)
        next(error);
    }
};

// Ruta protegida que solo es accesible si el token JWT es válido
// Aquí se muestra un mensaje personalizado con el nombre del usuario
const protectedRoute = (req, res) => {
    console.log(req.user); // Imprime el objeto 'user' del request (agregado por middleware de autenticación)

    // Responde con un mensaje de bienvenida al usuario, accediendo a su nombre desde req.user
    res.send(`Bienvenido a su dashboard ${req.user.name}`);
};

// Exportamos las funciones para que puedan ser utilizadas en las rutas
module.exports = { register, login, protectedRoute };
