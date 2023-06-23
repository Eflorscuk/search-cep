const { Sequelize } = require('sequelize')
const db = require('../../dbconfig') 

module.exports = db.define("endereco", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    bairro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})