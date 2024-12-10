const acceptRepository = require('../repository/accept')

const listAll = async (isQuery = false) => {
    return await acceptRepository.getAll(isQuery)
}

const accept = async (isAccepted,idRegister) => {
    return await acceptRepository.acceptRegisters(isAccepted,idRegister)
}

module.exports = {
    listAll,
    accept
}