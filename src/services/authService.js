// 📦 Importamos los módulos necesarios
const bcrypt = require('bcrypt');  // Para el hash de contraseñas
const jwt = require('jsonwebtoken');  // Para generar y verificar JWT
const { PrismaClientKnownRequestError } = require('@prisma/client/runtime/library');  // Para manejar errores de Prisma
const { PrismaClient } = require('@prisma/client');  // Cliente Prisma para interactuar con la base de datos
const prisma = new PrismaClient();  // Instanciamos el cliente de Prisma

/**
 * Función para registrar un nuevo usuario en la base de datos
 * @param {Object} param0 - Los datos del usuario (name, email, password)
 * @returns {Object} - Un objeto con el estado y la respuesta
 */
const registerUser = async ({ name, email, password }) => {
  // Validación básica de campos
  if (!name || !email || !password) {
    return {
      status: 400,
      response: { error: 'Uno o más campos son obligatorios.' }
    };
  }

  // 🛡️ Hasheamos la contraseña antes de almacenarla en la base de datos
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Creamos un nuevo usuario en la base de datos usando Prisma
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'USER'  // Asignamos el rol por defecto como 'USER'
      }
    });

    // Respuesta exitosa
    return {
      status: 201,
      response: { message: 'Usuario registrado correctamente.' }
    };
  } catch (error) {
    // Si ocurre un error relacionado con la base de datos (violación de clave única en el email)
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === 'P2002'  // Código de error para violación de clave única
    ) {
      return {
        status: 409,
        response: { error: 'El correo ya está registrado.' }
      };
    }
    // Si el error no es manejado, lo lanzamos para que sea procesado por un middleware
    throw error;
  }
};

/**
 * Función para autenticar a un usuario en el login
 * @param {Object} param0 - Los datos del usuario (email, password)
 * @returns {Object} - Un objeto con el estado y la respuesta (incluyendo el token si es exitoso)
 */
const loginUser = async ({ email, password }) => {
  // Buscamos al usuario por su email en la base de datos
  const user = await prisma.user.findUnique({ where: { email } });

  // Si no existe el usuario, devolvemos un error
  if (!user) {
    return {
      status: 400,
      response: { error: 'Email o contraseña inválidos.' }
    };
  }

  // Verificamos que la contraseña coincida con la almacenada en la base de datos
  const validPassword = await bcrypt.compare(password, user.password);

  // Si la contraseña no es válida, devolvemos un error
  if (!validPassword) {
    return {
      status: 400,
      response: { error: 'Email o contraseña inválidos.' }
    };
  }

  // Generamos un token JWT para el usuario
  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name },  // Datos que incluirá el token
    process.env.JWT_SECRET,  // La clave secreta para firmar el token
    { expiresIn: '4h' }  // El token expirará en 4 horas
  );

  // Retornamos el token generado
  return {
    status: 200,
    response: { token }
  };
};

// Exportamos las funciones para poder utilizarlas en los controladores
module.exports = { loginUser, registerUser };
