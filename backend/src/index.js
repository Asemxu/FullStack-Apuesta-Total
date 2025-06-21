const helmet = require('helmet');
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
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const server = http.createServer(app);
const io = socketIO(server)

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Apuesta Total API',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/routes/*.js'],
});


app.use(helmet());

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
  res.status(statusCode).json({'message': err.message});
  return;
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  // Unir al administrador a una sala específica
  socket.on('join-admin', (adminId) => {
    socket.join('admin');
    console.log(`Administrador ${adminId} unido a la sala admin`);
  });

  socket.on('join-user', (userId) => {
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