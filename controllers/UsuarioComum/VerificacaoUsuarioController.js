 const VerificacaoUsuario = require('../../models/usuarioComum/VerificacaoUsuario')

 class VerificacaoUsuarioController{

    async cadastro(req, res) {

        const {status, dataHoraSolicitacao, nomeCompleto, arquivoDoc, justificativaSolicitacao} = req.body
        const tblUsuarioComumIdUsuarioComum = req.params.tblUsuarioComumIdUsuarioComum

        const verificacaoUsuario = await VerificacaoUsuario.create({
            status,
            dataHoraSolicitacao,
            nomeCompleto,
            arquivoDoc,
            justificativaSolicitacao,
            tblUsuarioComumIdUsuarioComum
        })

        return res.status(201).json(verificacaoUsuario)
    }

    async listar(req, res) {

        const verificacaoUsuario = await VerificacaoUsuario.findAll()

        return res.json(verificacaoUsuario)

    }

    async responder(req, res) {
        const idVerificacaoUsuario = req.params.idVerificacaoUsuario

        VerificacaoUsuario.update(req.body, {
            where: {
                idVerificacaoUsuario: idVerificacaoUsuario
            }
        }).then(num => {
            if (num == 1) {
                res.send({
                    message: "Update funcionou"
                });
            } else {
                res.send({
                    message: `Erro ao dar update na verificação com id=${idVerificacaoUsuario}.`
                });
            }
        })
    }

}

module.exports = new VerificacaoUsuarioController()