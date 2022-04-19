const Celebridade = require("../../models/celebridade/Celebridade")
const VerificacaoUsuario = require("../../models/usuarioComum/VerificacaoUsuario")

class CelebridadeController {

    async cadastro(req, res){

        const tblVerificacaoUsuarioIdVerificacaoUsuario = req.params.tblVerificacaoUsuarioIdVerificacaoUsuario
        const tblTipoCelebridadeIdTipoCelebridade = req.params.tblTipoCelebridadeIdTipoCelebridade

        const celebridade= await Celebridade.create({
            tblVerificacaoUsuarioIdVerificacaoUsuario,
            tblTipoCelebridadeIdTipoCelebridade
        })

        return res.status(201).json(celebridade)

    }

    async listar(req, res) {

        const celebridade = await Celebridade.findAll({
            include: [{
                model: VerificacaoUsuario
            }]
        })

        return res.json(celebridade)

    }

    async deletar(req, res) {

        const idCelebridade = req.params.idCelebridade

        Celebridade.destroy(
            {where: {idCelebridade: idCelebridade}}
        ).then(
            () => {
                res.send('Celebridade excluída')
            }
        )

    }

}

module.exports = new CelebridadeController()