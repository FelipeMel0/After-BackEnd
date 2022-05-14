const SeguirUsuarioCelebridade = require("../../models/evento/interação/Seguir/SeguirUsuarioCelebridade")

class SeguirUsuarioCelebridadeController {

    async seguir(req, res){

        const tblCelebridadeIdCelebridade = req.params.tblCelebridadeIdCelebridade
        const tblUsuarioComumIdUsuarioComum = req.params.tblUsuarioComumIdUsuarioComum

        const seguir = await SeguirUsuarioCelebridade.create({
            tblCelebridadeIdCelebridade,
            tblUsuarioComumIdUsuarioComum
        })

        return res.status(201).json(seguir)

    }

    async listarSeguidoresCelebridade(req, res) {

        const tblCelebridadeIdCelebridade = req.params.tblCelebridadeIdCelebridade

        const seguir = await SeguirUsuarioCelebridade.findAll({
            where:{
                tblCelebridadeIdCelebridade: tblCelebridadeIdCelebridade
            }
        })

        return res.json(seguir)

    }

    async listarSeguidoresUsuarioComum(req, res) {

        const tblUsuarioComumIdUsuarioComum = req.params.tblUsuarioComumIdUsuarioComum

        const seguir = await SeguirUsuarioCelebridade.findAll({
            where:{
                tblUsuarioComumIdUsuarioComum: tblUsuarioComumIdUsuarioComum
            }
        })

        return res.json(seguir)

    }

    async deixarDeSeguir(req, res) {

        const idSeguirUsuarioCelebridade = req.params.idSeguirUsuarioCelebridade

        SeguirUsuarioCelebridade.destroy(
            {where: {idSeguirUsuarioCelebridade: idSeguirUsuarioCelebridade}}
        ).then(
            () => {
                res.send('Deixou de seguir')
            }
        )

    }

}

module.exports = new SeguirUsuarioCelebridadeController()