const { medals, MEDALNAMES } = require('../constants/medals')

const setMedal = (totalUsers) => {
    const medal = medals.find(m => totalUsers >= m.limit);
    return medal ? medal.name :  MEDALNAMES.MADERA;
}

module.exports = {
    setMedal
}