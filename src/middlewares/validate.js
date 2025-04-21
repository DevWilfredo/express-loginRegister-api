/**
 * Middleware de validación utilizando Joi
 * 
 * Este middleware permite validar los datos de entrada (por defecto `req.body`)
 * contra un esquema Joi definido. Es reutilizable para cualquier tipo de validación:
 * - req.body (por defecto)
 * - req.params
 * - req.query
 * 
 * @param {Joi.Schema} schema - Esquema Joi de validación
 * @param {string} [property='body'] - Propiedad del objeto `req` que se quiere validar
 * @returns {Function} Middleware para Express
 */

const validate = (schema, property = 'body') => {
    return (req, res, next) => {
        // Ejecutamos la validación con Joi y desactivamos 'abortEarly'
        const { error } = schema.validate(req[property], { abortEarly: false });

        // Si hay errores, devolvemos una respuesta 400 con detalles
        if (error) {
            return res.status(400).json({
                message: 'Validation error',
                details: error.details.map(d => d.message),
            });
        }

        // Si no hay errores, pasamos al siguiente middleware/controlador
        next();
    };
};

module.exports = validate;
