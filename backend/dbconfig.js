const Sequelize = require("sequelize")
const sequelize = new Sequelize(
    'searchcep',
    'admin',
    '1234',
    {
        host: 'localhost',
        dialect: 'mysql',
        password: '1234'
    }
)

module.exports = sequelize