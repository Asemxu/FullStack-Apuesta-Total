const Sequelize = require('sequelize')
const { sequelize }  = require('../config/db')

const user = sequelize.define("users", {
    id: { 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username: Sequelize.TEXT,
    rol: Sequelize.TEXT,
    token : Sequelize.TEXT,
    password : Sequelize.TEXT
});



module.exports = user