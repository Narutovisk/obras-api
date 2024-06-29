const Sequelize = require('sequelize');
const connection = require('../database/database');

const Usuario = connection.define(
    'usuarios', // nome da tabela
    {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

//Usuario.sync({force: true});

module.exports = Usuario;