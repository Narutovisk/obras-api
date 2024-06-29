const Categoria = require('../models/categoria');
const Genero = require('../models/genero');
const Obra = require('../models/obra');

exports.create = (req, res, next) => {
    const { nome, descricao, generoId, categoriaId } = req.body;

    if (!nome || !descricao || !generoId || !categoriaId) {
        return res.status(400).json({
            mensagem: 'Por favor preencha todos os campos'
        });
    }

    Obra.create({
        nome,
        descricao,
        generoId: generoId,
        categoriaId: categoriaId
    }).then(obraCriada => {
        res.status(201).json({
            mensagem: 'Obra criada com sucesso!',
            obra: {
                nome: obraCriada.nome,
                descricao: obraCriada.descricao
            }
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            mensagem: 'Ocorreu um erro ao cadastrar a obra',
            erro: err
        });
    });
};

exports.getAll = (req, res, next) => {
    Obra.findAll({
        order: [['nome', 'ASC']],
        include: [
            { model: Categoria, attributes: ['nome'] },
            { model: Genero, attributes: ['nome'] }
        ],
        attributes: ['nome', 'descricao']
    }).then(obras => {
        res.status(200).json({
            mensagem: 'Todas as obras:',
            obras: obras
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            mensagem: 'Erro ao buscar obras',
            erro: err
        });
    });
};

exports.getByName = (req, res, next) => {
    const nome = req.params.nome;
    Obra.findOne({
        where: { nome: nome },
        include: [
            { model: Categoria, attributes: ['nome'] },
            { model: Genero, attributes: ['nome'] }
        ],
        attributes: ['nome', 'descricao']
    }).then(obra => {
        if (!obra) {
            return res.status(404).json({
                mensagem: 'Obra não encontrada'
            });
        }

        res.status(200).json({
            mensagem: 'Obra encontrada:',
            obra: obra
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            mensagem: 'Erro ao buscar obra',
            erro: err
        });
    });
};

exports.update = (req, res, next) => {
    const nome = req.params.nome;
    const { descricao, generoId, categoriaId } = req.body;

    Obra.findOne({ where: { nome: nome } }).then(obra => {
        if (!obra) {
            return res.status(404).json({
                mensagem: 'Obra não encontrada'
            });
        }

        obra.update({
            descricao: descricao || obra.descricao,
            GeneroId: generoId || obra.GeneroId,
            CategoriaId: categoriaId || obra.CategoriaId
        }).then(() => {
            res.status(200).json({
                mensagem: 'Obra atualizada com sucesso'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                mensagem: 'Erro ao atualizar obra',
                erro: err
            });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            mensagem: 'Erro ao buscar obra',
            erro: err
        });
    });
};

exports.delete = (req, res, next) => {
    const nome = req.params.nome;

    Obra.findOne({ where: { nome: nome } }).then(obra => {
        if (!obra) {
            return res.status(404).json({
                mensagem: 'Obra não encontrada'
            });
        }

        obra.destroy().then(() => {
            res.status(200).json({
                mensagem: 'Obra excluída com sucesso!'
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                mensagem: 'Erro ao excluir obra',
                erro: err
            });
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            mensagem: 'Erro ao buscar obra',
            erro: err
        });
    });
};
