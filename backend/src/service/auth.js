const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const userRepository = require('../repository/user')

const login = async ({ username, password }) => {
    const user = await userRepository.getUser({ username })
    if (!user)
        throw new Error('Usuario no encontrado');

    const isEqualsPasswords = await bcrypt.compare(password, user.password)

    if (!isEqualsPasswords)
        throw new Error('Las contraseñas no coinciden');


    return {
        token: jwt.sign(
            {
                _id: user.id,
                role: user.rol
            },
            process.env.JWT_SECRET,
            {
                expiresIn: 60 * 60 * 24 // 24 hours
            }
        ),
        rol : user.rol,
        email : user.username
    }
}

const register = async ({ username, password }) => {
    const user = await userRepository.addUser({ username, password })
    if (!user)
        throw new Error('No se pudo registrar al usuario');

    return user
}

module.exports = {
    login,
    register
}