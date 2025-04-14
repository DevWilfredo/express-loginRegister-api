// 📦 Importamos todas las funciones del controlador de autenticación
const authController = require('./authController');

// 🧩 Re-exportamos todas las funciones de authController como un solo objeto
// Esto facilita la gestión de las rutas y mantiene el código más organizado,
// ya que podemos importar todas las funciones de autenticación desde un solo archivo
module.exports = {
    ...authController, // Esto es equivalente a exportar cada función del controlador de autenticación individualmente
};
