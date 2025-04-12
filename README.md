# Proyecto Backend Express

Este es un proyecto backend desarrollado con **Node.js** y **Express**, que emplea **JWT Authentication** para la autenticación de usuarios, **Prisma** como ORM y manejo de errores. El proyecto está estructurado de manera modular para facilitar su escalabilidad y mantenimiento.

## Índice

1. [Instalación](#Instalación)
2. [Tecnologías](#tecnologías)
3. [Estructura de Carpetas](#estructura-de-carpetas)
4. [Realizar Solicitudes a los Endpoints](#realizar-solicitudes-a-los-endpoints)
5. [Endpoints Disponibles](#endpoints-disponibles)
6. [Código de Conducta](#código-de-conducta)
7. [Otros Aspectos Importantes](#otros-aspectos-importantes)

## Instalación

Para instalar y ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/DevWilfredo/express-loginRegister-api

2. Ingresa en la carpeta del Proyecto
   ```bash
   cd express-loginRegister-api

3. Instala las Dependencias
   ```bash
   npm install
4. Crea un archivo .env en la raíz del proyecto y agrega tus variables de entorno
   ```bash
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/mi_base_de_datos
   JWT_SECRET=mi_clave_secreta
   PORT=tu puerto
   NODE_ENV='development'
5. Ejecuta las migraciones en Prisma
   ```bash
   npx prisma migrate dev --name '<migrationName>'
6. Inicia el Servidor (Debes estar dentro de SRC)
   ```bash
   node --watch app.js

## Tecnologias

* Node.js: Entorno de ejecución para JavaScript en el lado del servidor.

* Express: Framework web para Node.js.

* Prisma: ORM para interactuar con bases de datos de manera sencilla y eficiente.

* JWT (JSON Web Tokens): Sistema de autenticación basado en tokens.

* dotenv: Gestión de variables de entorno.

* Bcrypt.js: Librería para el hash de contraseñas.
