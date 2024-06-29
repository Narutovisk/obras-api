const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilidades = require('../utils/utils');

const Categoria = require('../models/categoria');

exports.create = (req, res, next) => {
    const nome = req.body.nome;

    if (nome === undefined){
        res.status(400).json({
            mensagem: 'Por favor preencha todos os campos'
        });
    }
    else {
        Categoria.findOne({
            where: {
                nome: nome
            }
        }).then(categoria => {
            if (categoria == undefined) {
                Categoria.create({
                    nome: nome
                }).then(categoriaCriada => {
                    res.status(201).json({
                        mensagem: 'Categoria criada com sucesso!',
                        categoria: {                          
                            nome: categoriaCriada.nome
                        }
                    });
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({
                        mensagem: 'Ocorreu um erro ao cadastrar a categoria',
                        erro: err
                    });
                });
            }
            else {
                res.status(401).json({
                    mensagem: 'A categoria ja existe'
                });
            }
        });
    };
}

exports.getAll = (req, res, next) => {
    Categoria.findAll({
        order: [
            ['nome', 'ASC']
        ],
        attributes: ['nome']
    }).then(categoria => {
        res.status(200).json({
            mensagem: 'Todos as categorias:',
            categoria: categoria
        });
    });
}

exports.getOne = (req, res, next) => {
    const id = req.params.id;
    Categoria.findOne({
        attributes: ['nome'],
        where: {
            id: id
        }
    }).then(categoria => {
        res.status(200).json({
            mensagem: 'Categoria encontrada:',
            categoria: categoria
        });
    });
}

exports.update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;

    Categoria.update({
        nome: nome
    },
        {
            where: {
                id: id
            }
        }).then(resultado => {
            res.status(201).json({
                mensagem: 'Categoria alterada!'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                mensagem: 'Erro na alteracao da categoria!'
            });
        });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Categoria.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            mensagem: 'Categoria excluida com sucesso!'
        });
    });
}