const authService = require('../service/auth')
const socketService = require('../service/socket')

async function login(req, res, next) {
  const { username, password } = req.body;
  const socketio = req.app.get('socketio');
  try {
    const { token , rol , email } = await authService.login({ username, password  })
    socketService.sendUserLoggedIn(token,socketio)
    return res.json({
      token,
      rol,
      email
    });
  } catch (ex) {
    next(ex);
  }
}

async function register(req, res, next) {
  const { username, password  } = req.body;

  try {
    const user = await authService.register({ username , password })
    return res.json(user);
  } catch (ex) {
    next(ex);
  }
}

module.exports = {
  login,
  register
};
