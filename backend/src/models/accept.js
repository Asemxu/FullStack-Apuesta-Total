const Sequelize = require('sequelize')
const { sequelize }  = require('../config/db')
const user = require('./user')

const accept = sequelize.define("accepts", {
    id: { 
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    id_username: Sequelize.INTEGER,
    medal: Sequelize.TEXT,
    status : Sequelize.INTEGER,
    total_pokemons : Sequelize.INTEGER
});

accept.belongsTo(user,{foreignKey: 'id_username'})

module.exports = accept