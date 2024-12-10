const verifyRole = (role) => {
    return (req, res, next) => {
        console.log(req.user ,role)
        if (req.user.role !== role) {
            return res.status(403).send('No autorizado');
        }
        next();
    };
}

module.exports = {
    verifyRole
}