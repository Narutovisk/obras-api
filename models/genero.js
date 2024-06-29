const Sequelize = require('sequelize');
const connection = require('../database/database');

const Genero = connection.define(
    'generos', // nome da tabela
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

//Genero.sync({force: true});

module.exports = Genero;