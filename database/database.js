const Sequelize = require('sequelize');

const connection = new Sequelize(
    'filmeseriedesenho', // nome do banco de dados
    'root',      // usuário de conexão
    '',  // senha de acesso
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;