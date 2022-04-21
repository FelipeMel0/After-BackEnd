const VariedadeIngressoLote = require('../../../models/evento/ingresso/VariedadeIngressoLote')

class VariedadeIngressoLoteController {

    async cadastro(req, res) {

        const {
            quantidade,
            descricao,
            tituloIngresso,
            valor,
            tblLoteIdLote
        } = req.body

        const variedadeIngressoLote = await VariedadeIngressoLote.create({
            quantidade,
            descricao,
            tituloIngresso,
            valor,
            tblLoteIdLote
        })

        return res.status(201).json(variedadeIngressoLote)

    }

    async listar(req, res) {

        const variedadeIngressoLote = await VariedadeIngressoLote.findAll()

        return res.json(variedadeIngressoLote)

    }

    async deletar(req, res) {

        const idVariedadeIngressoLote = req.params.idVariedadeIngressoLote

        VariedadeIngressoLote.destroy({
            where: {
                idVariedadeIngressoLote: idVariedadeIngressoLote
            }
        }).then(
            () => {
                res.send('Variedade excluída')
            }
        )

    }

    async editar(req, res) {

        const idVariedadeIngressoLote = req.params.idVariedadeIngressoLote

        VariedadeIngressoLote.update(req.body, {
            where: {
                idVariedadeIngressoLote: idVariedadeIngressoLote
            }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Update funcionou"
                });
            } else {
                res.send({
                    message: `Erro ao dar update na Variedade com id=${idVariedadeIngressoLote}.`
                });
            }
        })

    }

}

module.exports = new VariedadeIngressoLoteController()