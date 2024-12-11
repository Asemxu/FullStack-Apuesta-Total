const { Op, where } = require('sequelize')
const accept = require('../models/accept')
const user = require('../models/user')

const addAccept = async ({ id_username, medal, status, total_pokemons }) => {
    return await accept.create({ id_username, medal, status, total_pokemons })
}

const getAll = async (isQuery = false) => {
    return !isQuery ? await accept.findAll({
        where: { [Op.or]: [{ status: 0}] }, include: [
            {
                model: user,
                required: false
            }
        ]
    }) : await accept.findAll({
        where: { [Op.or]: [{ status: 1 } , { status : 2}] }, include: [
            {
                model: user,
                required: false
            }
        ]
    })
}

const acceptRegisters = async (isAccepted, idRegister) => {
    return await accept.update({ status: isAccepted ? 1 : 2 }, { where: { id: idRegister } })
}

const getRegister = async (idRegister) => {
    return await accept.findByPk(idRegister)
}

const getAllRegisters = async (id_username) => {
    return await accept.findAll({ where: { status: 1, id_username: id_username } })
}


module.exports = {
    acceptRegisters,
    addAccept,
    getAll,
    getAllRegisters,
    getRegister
};  