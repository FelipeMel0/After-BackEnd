const Lote = require('../../../models/evento/ingresso/Lote')

class LoteController {

    async cadastro(req, res) {

        const {
            qtdeEstoque,
            maxCompraPorUsuario,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            taxaAbsorvida,
            tblTipoIngressoIdTipoIngresso
        } = req.body

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const lote = await Lote.create({
            qtdeEstoque,
            maxCompraPorUsuario,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            taxaAbsorvida,
            tblTipoIngressoIdTipoIngresso,
            tblEventoIdEvento
        })

        return res.status(201).json(lote)

    }

    async listar(req, res) {

        const lote = await Lote.findAll()

        return res.json(lote)

    }

    async deletar(req, res) {

        const idLote = req.params.idLote

        Lote.destroy({
            where: {
                idLote: idLote
            }
        }).then(
            () => {
                res.send('Lote excluído')
            }
        )

    }

    async editar(req, res) {

        const idLote = req.params.idLote

        Lote.update(req.body, {
            where: {
                idLote: idLote
            }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Update funcionou"
                });
            } else {
                res.send({
                    message: `Erro ao dar update no Lote com id=${idLote}.`
                });
            }
        })

    }

}

module.exports = new LoteController()