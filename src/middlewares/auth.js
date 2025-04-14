// 📦 Importamos el módulo jwt para verificar y decodificar el token JWT
const jwt = require('jsonwebtoken');

/**
 * Middleware para autenticar el token JWT y validar el acceso
 * @param {Request} req  - Objeto del Request del usuario
 * @param {Response} res  - Objeto del Response para el usuario
 * @param {NextFunction} next  - Objeto de control que pasa el control al siguiente middleware despues de completar la tarea
 */
const authenticateToken = (req, res, next) => {
    // Obtiene el token JWT del encabezado Authorization
    const token = req.headers.authorization;
    
    // Si no se proporciona un token, se rechaza la solicitud con un error 401
    if (!token) return res.status(401).json({ error: 'Access Denied, no token Provided' });

    // Verificación del token JWT usando la clave secreta definida en .env
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // Si hay un error en la verificación del token, se rechaza la solicitud con un error 403
        if (err) return res.status(403).json({ error: 'Invalid Token' });

        // Si el token es válido, se agrega la información del usuario decodificada al objeto req
        req.user = user;
    });

    // Llama al siguiente middleware o ruta
    next();
};

// Exportamos el middleware para que pueda ser utilizado en las rutas
module.exports = authenticateToken;
