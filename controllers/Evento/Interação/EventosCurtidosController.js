const Celebridade = require("../../../models/celebridade/Celebridade")
const IntermEventoCelebridade = require("../../../models/celebridade/IntermediariaEventoCelebridade")
const Empresa = require("../../../models/empresa/Empresa")
const Categoria = require("../../../models/evento/Categoria")
const Evento = require("../../../models/evento/Evento")
const EventosCurtidos = require("../../../models/evento/interação/EventosCurtidos")
const Perfil = require("../../../models/perfil/Perfil")
const VerificacaoUsuario = require("../../../models/usuarioComum/VerificacaoUsuario")

class EventosCurtidosController {

    async curtir(req, res){

        const tblPerfilIdPerfil = req.params.tblPerfilIdPerfil
        const tblEventoIdEvento = req.params.tblEventoIdEvento


        const eventosCurtidos = await EventosCurtidos.create({
            tblPerfilIdPerfil,
            tblEventoIdEvento
        })

        return res.status(201).json(eventosCurtidos)

    }

    async listarCurtidas(req, res) {

        const eventosCurtidos = await EventosCurtidos.findAll({
            include:[ {
                model: Perfil
            }]
        })

        return res.json(eventosCurtidos)

    }

    async listarCurtidasPorIdEvento(req, res){

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const eventosCurtidos = await EventosCurtidos.findAll({
            where: {
                tblEventoIdEvento: tblEventoIdEvento
            }
        })

        return res.json(eventosCurtidos)

    }

    async listarCurtidasPorIdPerfil(req, res){

        const tblPerfilIdPerfil = req.params.tblPerfilIdPerfil

        const eventosCurtidos = await EventosCurtidos.findAll({
            where: {
                tblPerfilIdPerfil: tblPerfilIdPerfil
            },
            include: [{
                model: Evento,
                    include: [{
                        model: IntermEventoCelebridade,
                        include: [{
                            model: Celebridade,
                            include: [{
                                model: VerificacaoUsuario,
                            }]
                        }]
                    }, {
                        model: Categoria
                    }, {
                        model: Empresa,
                        include: [{
                            model: Perfil
                        }]
                    }]
                
            }]
        })

        return res.json(eventosCurtidos)

    }

    async deletarCurtida(req, res) {

        const idEventosCurtidos = req.params.idEventosCurtidos

        EventosCurtidos.destroy(
            {where: {idEventosCurtidos: idEventosCurtidos}}
        ).then(
            () => {
                res.send('Curtida excluída')
            }
        )

    }

}

module.exports = new EventosCurtidosController()