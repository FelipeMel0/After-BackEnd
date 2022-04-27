const IntermEventoAssunto = require("../../models/evento/IntermEventoAssunto")

class IntermEventoAssuntoController {

    async cadastro(req, res){

        const tblAssuntoIdAssunto = req.params.tblAssuntoIdAssunto
        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const intermediaria = await IntermEventoAssunto.create({
            tblAssuntoIdAssunto,
            tblEventoIdEvento
        })

        return res.status(201).json(intermediaria)

    }

    async listar(req, res) {

        const intermediaria = await IntermEventoAssunto.findAll()

        return res.json(intermediaria)

    }

    async deletar(req, res) {

        const idIntermEventoAssunto = req.params.idIntermEventoAssunto

        IntermEventoAssunto.destroy(
            {where: {idIntermEventoAssunto: idIntermEventoAssunto}}
        ).then(
            () => {
                res.send('Intermediária excluída')
            }
        )

    }

}

module.exports = new IntermEventoAssuntoController()