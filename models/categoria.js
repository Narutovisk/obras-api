const Sequelize = require('sequelize');
const connection = require('../database/database');

const Categoria = connection.define(
    'categorias', // nome da tabela
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

//Categoria.sync({force: true});

module.exports = Categoria;