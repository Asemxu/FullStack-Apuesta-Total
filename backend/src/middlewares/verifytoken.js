const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'].substring(7);
    if (!token) {
        return res.status(403).send('Token no proporcionado');
    }

    jwt.verify(token, 'JWT-SECRET', (err, user) => {
        if (err) {
            return res.status(500).send('Error al autenticar el token');
        }

        req.user = user;
        next();
    });
};


module.exports = {
    verifyToken
}