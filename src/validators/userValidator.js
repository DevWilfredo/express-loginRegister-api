// 📦 Importamos Joi para definir esquemas de validación
const Joi = require('joi');

/**
 * Esquema de validación para el registro de usuarios
 * 
 * Este esquema asegura que los datos enviados al registrar un nuevo usuario
 * cumplan con los siguientes requisitos:
 * 
 * - name: string, mínimo 3 caracteres, máximo 30, obligatorio
 * - email: string, formato válido de email, obligatorio
 * - password: string, mínimo 6 caracteres, obligatorio
 */
const userSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'El nombre debe ser una cadena de texto.',
            'string.empty': 'El nombre es obligatorio.',
            'string.min': 'El nombre debe tener al menos 3 caracteres.',
            'string.max': 'El nombre no puede tener más de 30 caracteres.',
            'any.required': 'El nombre es obligatorio.'
        }),
    
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Debe proporcionar un correo electrónico válido.',
            'string.empty': 'El correo electrónico es obligatorio.',
            'any.required': 'El correo electrónico es obligatorio.'
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.min': 'La contraseña debe tener al menos 6 caracteres.',
            'string.empty': 'La contraseña es obligatoria.',
            'any.required': 'La contraseña es obligatoria.'
        })
});

// 🚀 Exportamos el esquema para usarlo en las rutas
module.exports = {
    userSchema
};
