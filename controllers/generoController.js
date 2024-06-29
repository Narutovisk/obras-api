const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilidades = require('../utils/utils');

const Genero = require('../models/genero');

exports.create = (req, res, next) => {
    const nome = req.body.nome;

    if (nome === undefined){
        res.status(400).json({
            mensagem: 'Por favor preencha todos os campos'
        });
    }
    else {
        Genero.findOne({
            where: {
                nome: nome
            }
        }).then(genero => {
            if (genero == undefined) {
                Genero.create({
                    nome: nome
                }).then(generoCriado => {
                    res.status(201).json({
                        mensagem: 'Genero criado com sucesso!',
                        genero: {                          
                            nome: generoCriado.nome
                        }
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        mensagem: 'Ocorreu um erro ao cadastrar o genero',
                        erro: err
                    });
                });
            }
            else {
                res.status(401).json({
                    mensagem: 'O genero ja existe'
                });
            }
        });
    };
}

exports.getAll = (req, res, next) => {
    Genero.findAll({
        order: [
            ['nome', 'ASC']
        ],
        attributes: ['nome']
    }).then(genero => {
        res.status(200).json({
            mensagem: 'Todos os generos:',
            genero: genero
        });
    });
}

exports.getOne = (req, res, next) => {
    const id = req.params.id;
    Genero.findOne({
        attributes: ['nome'],
        where: {
            id: id
        }
    }).then(genero => {
        res.status(200).json({
            mensagem: 'Genero encontrado:',
            genero: genero
        });
    });
}

exports.update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;

    Genero.update({
        nome: nome
    },
        {
            where: {
                id: id
            }
        }).then(resultado => {
            res.status(201).json({
                mensagem: 'Genero alterado'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                mensagem: 'Erro na alteracao do genero!'
            });
        });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Genero.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            mensagem: 'Genero excluido com sucesso!'
        });
    });
}