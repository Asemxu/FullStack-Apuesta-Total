const user = require('../models/user')
const { Op } = require('sequelize')
const bcryptjs = require('bcryptjs')

const getUser = async ({ username   }) => {
  return await user.findOne({ where : { username    }})
}

const addUser = async ({ username , password  }) => {
  const passHash = await bcryptjs.hash(password,10)
  return await user.create({ username , password : passHash, rol : 'User' })
}

const getUserById = async ( id) => {
  return await user.findOne({ where : { id : id }})
}

module.exports = {
  getUser,
  addUser,
  getUserById
};