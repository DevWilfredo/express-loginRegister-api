// 🌱 Carga de variables de entorno desde el archivo .env
require('dotenv').config();

// 📦 Importación de módulos externos
const express = require('express');         // Framework principal para crear la API
const morgan = require('morgan');           // Middleware para loguear las peticiones HTTP en consola
const routes = require('./routes');         // Importa el enrutador principal desde el directorio /routes

// 🛠️ Importación de middlewares personalizados
const errorHandler = require('./middlewares/errorHandler'); // Middleware para manejo centralizado de errores

// 🚀 Inicialización de la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000; // Puerto definido por entorno o valor por defecto

// 🧩 Middlewares globales
app.use(morgan('dev'));                         // Mostrar logs detallados de las peticiones HTTP
app.use(express.json());                        // Parseo automático de cuerpos JSON
app.use(express.urlencoded({ extended: true })); // Soporte para cuerpos tipo application/x-www-form-urlencoded

// 📌 Definición de rutas principales (prefijo /api)
app.use('/api', routes); // Delega el manejo de rutas a los archivos del directorio /routes

// ⚠️ Middleware para manejo de errores (se coloca después de las rutas)
app.use(errorHandler);

// 🟢 Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
