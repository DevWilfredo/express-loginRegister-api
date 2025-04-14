/**
 * Middleware centralizado para manejo de errores
 * @param {Error} err - Objeto de error lanzado
 * @param {Request} req  - Objeto del Request del usuario
 * @param {Response} res  - Objeto del Response para el usuario
 * @param {NextFunction} next  - Objeto de control que pasa el control al siguiente middleware despues de completar la tarea
 */
const errorHandler = (err, req, res, next) => {
    // Imprime el mensaje de error en la consola para los desarrolladores
    console.error(`[ERROR]: ${err.message || err}`);

    // Si el error no tiene un código de estado personalizado, se usa 500 (Error interno del servidor)
    const status = err.statusCode || 500;

    // Si el error tiene un mensaje específico, lo usamos; de lo contrario, usamos un mensaje genérico
    const message = err.message || 'Error del Servidor';

    // Responde con el error al cliente, incluyendo el código de estado, mensaje y, si no está en producción, la pila de errores
    res.status(status).json({
        success: false,
        message,
        // Si no estamos en un entorno de producción, incluimos la pila de errores para facilitar la depuración
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
    });

    // Llama al siguiente middleware (aunque en este caso no debería ser necesario continuar después de manejar el error)
    next();
};

// Exportamos el middleware para su uso en la aplicación
module.exports = errorHandler;
