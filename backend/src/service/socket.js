const { SOCKET } = require("../constants/sockets");

const  sendUserLoggedIn = (token,socketio) =>{
    socketio.to(token).emit(SOCKET.EVENTS.LOGGEDIN, { token });    
}

const  uploadPokemons = (user,accept,socketio) =>{
    socketio.to('admin').emit(SOCKET.EVENTS.UPLOADCSV, { user , accept });    
}

const sendAprovadNotification = (idregister,accept, iduser, socketio) => {
    socketio.to(iduser).emit(SOCKET.EVENTS.APPROVALNOTIFICATION, {  accept : accept , idregister });
}

module.exports = {
    sendUserLoggedIn,
    uploadPokemons,
    sendAprovadNotification
}