const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const http = require('http');
const port = process.env.PORT || 4000;
const auth = require('./routes/auth');
const user = require('./routes/user');
const admin = require('./routes/admin');
const { verifyRole } = require('./middlewares/validaterole');
const { requireAuth } = require('./middlewares/auth');
const ROLES = require('./constants/roles');
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server)


app.use(cors({
  origin: "*"
}));

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.set('socketio', io);


app.use('/v1/' , auth);
app.use('/v1/user' , requireAuth ,verifyRole(ROLES.USER), user);
app.use('/v1/admin' , requireAuth ,verifyRole(ROLES.ADMIN), admin);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});



io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Unir al administrador a una sala específica
  socket.on('joinAdmin', () => {
    socket.join('admin');
    console.log('Administrador unido a la sala admin');
  });

  socket.on('join', (userId) => {
    socket.join(userId);
    console.log(`Usuario ${userId} se ha unido a su sala`);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});