const Comentario = require('../../../models/evento/interação/Comentario')
const Perfil = require('../../../models/perfil/Perfil')

class ComentarioController {

    async cadastro(req, res){

        const {texto} = req.body
        const tblPerfilIdPerfil = req.params.tblPerfilIdPerfil
        const tblEventoIdEvento = req.params.tblEventoIdEvento


        const comentario = await Comentario.create({
            texto,
            tblPerfilIdPerfil,
            tblEventoIdEvento
        })

        return res.status(201).json(comentario)

    }

    async listar(req, res) {

        const comentario = await Comentario.findAll({
            include: [{
                model: Perfil
            }]
        })

        return res.json(comentario)

    }

    async listarComentariosPorIdEvento(req, res){

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const comentario = await Comentario.findAll({
            where: {
                tblEventoIdEvento: tblEventoIdEvento
            },
            include:{
                model: Perfil
            }
        })

        return res.json(comentario)

    }

    async deletar(req, res) {

        const idComentario = req.params.idComentario

        Comentario.destroy(
            {where: {idComentario: idComentario}}
        ).then(
            () => {
                res.send('Comentário excluído')
            }
        )

    }

}

module.exports = new ComentarioController()