const { SOCKET } = require("../constants/sockets");

const  sendUserLoggedIn = (token,socketio) =>{
    socketio.to(SOCKET.ROOM.ADMIN).emit(SOCKET.EVENTS.LOGGEDIN, { token });    
}

const  uploadPokemons = (user,accept,socketio) =>{
    socketio.to(SOCKET.ROOM.ADMIN).emit(SOCKET.EVENTS.UPLOADCSV, { user , accept });    
}

const sendAprovadNotification = (accept, accepted, iduser, socketio ) => {
    socketio.to(iduser).emit(SOCKET.EVENTS.APPROVALNOTIFICATION, {  accept , accepted});
}

module.exports = {
    sendUserLoggedIn,
    uploadPokemons,
    sendAprovadNotification
}