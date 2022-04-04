const Verificacao = require('../../models/empresa/Verificacao')

class VerificacaoController {

    async cadastro(req, res) {

        const {
            status,
            dataHoraSolicitacao,
            arquivoDoc,
            justificativaSolicitacao
        } = req.body
        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa

        const verificacao = await Verificacao.create({
            status,
            dataHoraSolicitacao,
            arquivoDoc,
            justificativaSolicitacao,
            tblEmpresaIdEmpresa
        })

        return res.status(201).json(verificacao)
    }

    async listar(req, res) {

        const verificacao = await Verificacao.findAll()

        return res.json(verificacao)

    }

    async responder(req, res) {
        const idVerificacao = req.params.idVerificacao

        Verificacao.update(req.body, {
            where: {
                idVerificacao: idVerificacao
            }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Update funcionou"
                });
            } else {
                res.send({
                    message: `Erro ao dar update na verificação com id=${idVerificacao}.`
                });
            }
        })
    }

}

module.exports = new VerificacaoController()