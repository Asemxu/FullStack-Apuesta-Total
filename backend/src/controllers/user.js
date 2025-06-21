const userService = require('../service/user')
const sockerService = require('../service/socket')

async function upload(req, res, next) {
  const pokemons = req.body
  try {
    const accept = await userService.register(pokemons,req.user._id)
    const user = await userService.getUser(req.user._id)
    const socketiod = req.app.get('socketio');
    sockerService.uploadPokemons(user,accept,socketiod)
    return res.json( { data : accept , register : accept.total_pokemons } );
  } catch (ex) {
    next(ex);
  }
}


async function totalRegisters(req, res, next) {
  try {
    const accept = await userService.totalRegisters(req.user._id)
    return res.json(accept);
  } catch (ex) {
    next(ex);
  }
}



module.exports = {
  upload,
  totalRegisters
};