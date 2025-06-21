const adminService = require('../service/admin')
const socketService = require('../service/socket')

async function list(req, res, next) {
  try {
    const accepts = await adminService.listAll()
    return res.json(accepts);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
}

async function listHistory(req, res, next) {
  try {
    const isQuery = true
    const accepts = await adminService.listAll(isQuery)
    return res.json(accepts);
  } catch (ex) {
   next(ex);
  }
}

async function accept(req, res, next) {
  const { accept ,idregister , iduser} = req.body
  try {
    const accepts = await adminService.accept(accept, idregister )
    const accepted = await adminService.getAccepted(idregister)
    const socketio = req.app.get('socketio');
    socketService.sendAprovadNotification(accept , accepted , iduser ,socketio)
    return res.json(accepts);
  } catch (ex) {
    next(ex);
  }
}



module.exports = {
  listHistory,
  list,
  accept
};