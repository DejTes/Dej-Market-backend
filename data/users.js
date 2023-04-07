const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: true
    },
    {
        name: 'Jack Smith',
        email: 'jack@test.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: false
    },
    {
        name: 'Ellen John',
        email: 'ellen@test.com',
        password: bcrypt.hashSync('1234567', 10),
        isAdmin: false
    },
]

module.exports = users