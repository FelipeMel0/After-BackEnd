const Celebridade = require("../../../models/celebridade/Celebridade")
const {
    sequelize,
    Sequelize
} = require("../../../models/database/db")
const ContaEmpresa = require("../../../models/empresa/contaEmpresa/ContaEmpresa")
const Empresa = require("../../../models/empresa/Empresa")
const Categoria = require("../../../models/evento/Categoria")
const Evento = require("../../../models/evento/Evento")
const FaixaEtaria = require("../../../models/evento/FaixaEtaria")
const TipoEvento = require("../../../models/evento/TipoEvento")
const Perfil = require("../../../models/perfil/Perfil")
const UsuarioComum = require("../../../models/usuarioComum/UsuarioComum")
const VerificacaoUsuario = require("../../../models/usuarioComum/VerificacaoUsuario")
const IntermEventoCelebridade = require("../../../models/celebridade/IntermediariaEventoCelebridade")

class PesquisarEventoController {

    async pesquisar(req, res) {

        const op = Sequelize.Op
        const titulo = req.body.titulo

        const pesquisa = await Evento.findAll({
            where: {
                titulo: {
                    [op.like]: `%${titulo}%`
                }
            },
            include: [{
                model: IntermEventoCelebridade,
                include: [{
                    model: Celebridade,
                    attributes: ['idCelebridade'],
                    include: [{
                        model: VerificacaoUsuario,
                        attributes: ['nickname'],
                        include: [{
                            model: UsuarioComum,
                            include: [{
                                model: Perfil,
                                attributes: ['imagemPerfil']
                            }]
                        }]
                    }]
                }]
            }, {
                model: Categoria,
                attributes: ['nomeCategoria']
            }, {
                model: Empresa,
                include: [{
                    model: Perfil
                }]
            }, {
                model: FaixaEtaria,
                attributes: ['idade']
            }, {
                model: TipoEvento,
                attributes: ['tipo']
            }, {
                model: ContaEmpresa
            }],
        })

        return res.json(pesquisa)

    }

    async pesquisarGet(req, res) {

        const op = Sequelize.Op
        const titulo = req.params.titulo

        const pesquisa = await Evento.findAll({
            where: {
                titulo: {
                    [op.like]: `%${titulo}%`
                }
            },
            include: [{
                model: IntermEventoCelebridade,
                include: [{
                    model: Celebridade,
                    attributes: ['idCelebridade'],
                    include: [{
                        model: VerificacaoUsuario,
                        attributes: ['nickname'],
                        include: [{
                            model: UsuarioComum,
                            include: [{
                                model: Perfil,
                                attributes: ['imagemPerfil']
                            }]
                        }]
                    }]
                }]
            }, {
                model: Categoria,
                attributes: ['nomeCategoria']
            }, {
                model: Empresa,
                include: [{
                    model: Perfil
                }]
            }, {
                model: FaixaEtaria,
                attributes: ['idade']
            }, {
                model: TipoEvento,
                attributes: ['tipo']
            }, {
                model: ContaEmpresa
            }],
        })

        return res.json(pesquisa)

    }

}

module.exports = new PesquisarEventoController()