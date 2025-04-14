// 📦 Importamos el servicio de autenticación
const authService = require('./authService');

// Exportamos todas las funciones del authService
module.exports = {
    ...authService,  // Spread operator para exportar todo el contenido del authService
};
