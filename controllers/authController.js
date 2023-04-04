const User = require('../models/User')
const {StatusCode} = require('http-status-codes')



const register = async (req, res) => {
    res.send('register user')
}
const login = async (req, res) => {
    res.send('login user')
}
const logout = async (req, res) => {
    res.send('logout user')
}
module.exports = {
    register,
    login,
    logout
}