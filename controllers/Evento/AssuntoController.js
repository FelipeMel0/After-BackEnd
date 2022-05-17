const Assunto = require('../../models/evento/Assunto')
const Categoria = require('../../models/evento/Categoria')

class AssuntoController {

    async cadastro(req, res){

        const {nomeAssunto} = req.body
        const tblCategoriumIdCategoria = req.params.tblCategoriumIdCategoria

        const assunto = await Assunto.create({
            nomeAssunto,
            tblCategoriumIdCategoria
        })

        return res.status(201).json(assunto)

    }

    async listar(req, res) {

        const assunto = await Assunto.findAll({
            include: [{
                model: Categoria
            }]
        })

        return res.json(assunto)

    }

    async listarPorCategoria(req, res) {

        const tblCategoriumIdCategoria = req.params.tblCategoriumIdCategoria

        const assunto = await Assunto.findAll({
            include: [{
                model: Categoria
            }],
            where: {tblCategoriumIdCategoria: tblCategoriumIdCategoria}
        })

        return res.json(assunto)

    }

    async deletar(req, res) {

        const idAssunto = req.params.idAssunto

        Assunto.destroy(
            {where: {idAssunto: idAssunto}}
        ).then(
            () => {
                res.send('Assunto excluído')
            }
        )

    }

}

module.exports = new AssuntoController()