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
    console.log(ex)
    res.status(400).json({ message: ex.message });
  }
}

async function register(req, res, next) {
  const { username, password  } = req.body;

  try {
    const user = await authService.register({ username , password })
    return res.json(user);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
}

module.exports = {
  login,
  register
};
