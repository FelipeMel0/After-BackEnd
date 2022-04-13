const Evento = require("../../models/evento/Evento")

class EventoController {

    async cadastro(req, res) {

        const {
            titulo,
            descricao,
            capa,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            taxaAbsorvida,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa
        } = req.body

        // const taxaAbsorvida = req.params.taxaAbsorvida
        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa
        // const tblFaixaEtariumIdFaixaEtaria = req.params.tblFaixaEtariumIdFaixaEtaria
        // const tblTipoEventoIdTipoEvento = req.params.tblTipoEventoIdTipoEvento
        // const tblCategoriumIdCategoria = req.params.tblCategoriumIdCategoria
        // const tblContaEmpresaIdContaEmpresa = req.params.tblContaEmpresaIdContaEmpresa

        const evento = await Evento.create({
            titulo,
            descricao,
            capa,
            dataInicio,
            dataFim,
            horaInicio,
            horaFim,
            taxaAbsorvida,
            tblFaixaEtariumIdFaixaEtaria,
            tblTipoEventoIdTipoEvento,
            tblCategoriumIdCategoria,
            tblContaEmpresaIdContaEmpresa,
            tblEmpresaIdEmpresa
        })

        return res.status(201).json(evento)

    }

    async listar(req, res) {

        const evento = await Evento.findAll()

        return res.json(evento)

    }

    async deletar(req, res) {

        const idEvento = req.params.idEvento

        Evento.destroy(
            {where: {idEvento: idEvento}}
        ).then(
            () => {
                res.send('Evento excluído')
            }
        )

    }

    async editar(req, res) {

        const idEvento = req.params.idEvento

        Evento.update(req.body, {
            where: {idEvento: idEvento}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update na Empresa com id=${idEvento}.`
              });
            }
        })

    }

}

module.exports = new EventoController()