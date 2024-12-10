const Sequelize = require('sequelize')
const dotenv = require("dotenv")
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAMEDB, process.env.PASSWORD, {
  host: process.env.HOSTNAME,
  port: process.env.PORT,
  dialect: "mysql",
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

const connect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
}


connect() 

module.exports = {
  connect, sequelize
}
