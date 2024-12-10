const acceptRepository = require('../repository/accept')
const userRepository = require('../repository/user')
const { setMedal } = require('../utils/setMedal')

const register = async (pokemons =  []  , id_username) => {
    const accept = await acceptRepository.addAccept({
        id_username , medal  : setMedal(pokemons.length) , status : 0 , total_pokemons : pokemons.length
    })
    if (!accept)
        throw new Error('No se pudieron registrar a los usuarios');

    return accept
}

const totalRegisters = async ( id_username) => {
    const registers = await acceptRepository.getAllRegisters(id_username)
    const totalCount = registers.reduce((accumulator, item) => {
        return accumulator + item.total_pokemons;
    }, 0)
    return totalCount
}

const getUser = async (id) => {
    return await userRepository.getUserById(id)
}

module.exports = {
    getUser,
    register,
    totalRegisters
}