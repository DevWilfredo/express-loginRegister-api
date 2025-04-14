# 🔐 User Authentication API (Express + JWT + Prisma)

Este es un proyecto backend desarrollado con **Node.js** y **Express**, que emplea **JWT Authentication** para la autenticación de usuarios, **Prisma** como ORM y manejo de errores. El proyecto está estructurado de manera modular para facilitar su escalabilidad y mantenimiento.

---

## 📚 Índice

1. 🧰 [Requisitos](#requisitos)  
2. 🚀 [Instalación](#instalación)  
3. 🛠️ [Tecnologías](#tecnologías)  
4. 🗂️ [Estructura de Carpetas](#estructura-de-carpetas)  
5. 📡 [Uso de la API](#uso-de-la-api)  
6. 📬 [Endpoints Disponibles](#endpoints-disponibles)  
7. 📖 [Código de Conducta](#código-de-conducta)  
8. ✅ [Actualizaciones Pendientes](#actualizaciones-pendientes)  
9. 👨‍💻 [Autor](#autor)  
10. 🪪 [Licencia](#licencia)  

---

## 🧰 Requisitos

Antes de instalar y ejecutar este proyecto, asegúrate de tener instalados los siguientes elementos en tu entorno local:

- **[Node.js](https://nodejs.org/)** versión 18 o superior  
- **[npm](https://www.npmjs.com/)** (viene incluido con Node.js)  
- **[PostgreSQL](https://www.postgresql.org/)** como sistema gestor de base de datos  
- *(Opcional)* **[Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference)** si deseas ejecutar comandos Prisma globalmente  

Asegúrate también de tener configurado PostgreSQL con una base de datos creada para este proyecto.

---

## 🚀 Instalación

Para instalar y ejecutar este proyecto en tu entorno local, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/DevWilfredo/express-loginRegister-api
   ```

2. Ingresa en la carpeta del proyecto:
   ```bash
   cd express-loginRegister-api
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno:
   ```env
   DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/mi_base_de_datos
   JWT_SECRET=mi_clave_secreta
   PORT=3000
   NODE_ENV=development
   ```

5. Ejecuta las migraciones en Prisma:
   ```bash
   npx prisma migrate dev --name "init"
   ```

6. Inicia el servidor (desde la carpeta raíz):
   ```bash
   node --watch src/app.js
   ```

---

## 🛠️ Tecnologías

| Tecnología     | Descripción                                               |
|----------------|-----------------------------------------------------------|
| 🟢 **Node.js**  | Entorno de ejecución para JavaScript en el backend       |
| ⚡ **Express**  | Framework web rápido y minimalista para Node.js          |
| 🧬 **Prisma**   | ORM moderno y eficiente para bases de datos              |
| 🔐 **JWT**      | Sistema de autenticación basado en tokens                |
| 🔑 **bcrypt.js**| Librería para encriptar contraseñas                      |
| 🌱 **dotenv**   | Manejo de variables de entorno en archivos `.env`        |

---

## 🗂️ Estructura de Carpetas

```bash
├── app.js                 # Punto de entrada de la aplicación
├── routes/
│   ├── auth.js            # Rutas relacionadas a autenticación
│   └── index.js           # Index de rutas (modular)
├── controllers/
│   ├── authController.js  # Lógica del controlador de autenticación
│   └── index.js           # Index de controladores (modular)
├── services/
│   ├── authService.js     # Lógica de servicio (registro/login)
│   └── index.js           # Index de servicios (modular)
├── middlewares/
│   ├── auth.js            # Verificación de token JWT
│   └── errorHandler.js    # Middleware centralizado de errores
├── .env                   # Variables de entorno
└── README.md              # Este archivo
```

---

## 📡 Uso de la API

### 🔑 Registro

```http
POST /api/auth/register
```

**Body JSON:**
```json
{
  "name": "Juan",
  "email": "juan@example.com",
  "password": "123456"
}
```

**Respuesta exitosa:**
```json
{
  "message": "Usuario registrado correctamente."
}
```

---

### 🔓 Login

```http
POST /api/auth/login
```

**Body JSON:**
```json
{
  "email": "juan@example.com",
  "password": "123456"
}
```

**Respuesta exitosa:**
```json
{
  "token": "JWT_TOKEN_AQUI"
}
```

---

### 🔐 Ruta Protegida

```http
GET /api/auth/protected-route
```

**Headers:**
```
Authorization: JWT_TOKEN_AQUI
```

**Respuesta exitosa:**
```json
"Bienvenido a su dashboard Juan"
```

---

## 📬 Endpoints Disponibles

| Método | Ruta                      | Descripción                        | Middleware             |
|--------|---------------------------|------------------------------------|------------------------|
| POST   | /api/auth/register        | Registro de usuario                | ❌                     |
| POST   | /api/auth/login           | Inicio de sesión y generación JWT  | ❌                     |
| GET    | /api/auth/protected-route | Ruta protegida con token JWT       | ✅ authenticateToken   |

---

## 📖 Código de Conducta

- Sé respetuoso con otros colaboradores  
- No publiques información confidencial  
- Sigue el estilo de código del proyecto  
- Reporta errores o problemas a través de Issues  
- Usa Pull Requests para mejoras o correcciones  

---

## ✅ Actualizaciones Pendientes

- [ ] Conectar a una interfaz frontend  
- [ ] Implementar validaciones con Joi o Zod  
- [ ] Sistema de roles más avanzado  
- [ ] Refactor para usar controladores asincrónicos con manejo avanzado de errores  

---

## 👨‍💻 Autor

Desarrollado por **DevWilfredo**

---

## 🪪 Licencia

Este proyecto está bajo la licencia MIT.  
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---
