const Sequelize = require('sequelize');
const connection = require('../database/database');
const Categoria = require('./categoria');
const Genero = require('./genero');

const Obra = connection.define(
    'obras', // nome da tabela
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
);

Obra.belongsTo(Categoria);  // Cada obra pertence a uma categoria, Ex: Filme, Serie, Desenho
Obra.belongsTo(Genero);  // Cada obra pertence a um genero, Ex: Ação, Comedia, Terror

//Obra.sync({force: true});

module.exports = Obra;