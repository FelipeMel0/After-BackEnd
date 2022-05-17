const SeguirEmpresaCelebridade = require("../../models/evento/interação/Seguir/SeguirEmpresaCelebridade")

class SeguirEmpresaCelebridadeController {

    async seguir(req, res){

        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa
        const tblCelebridadeIdCelebridade = req.params.tblCelebridadeIdCelebridade

        const seguir = await SeguirEmpresaCelebridade.create({
            tblEmpresaIdEmpresa,
            tblCelebridadeIdCelebridade
        })

        return res.status(201).json(seguir)

    }

    async listarSeguidoresEmpresa(req, res) {

        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa

        const seguir = await SeguirEmpresaCelebridade.findAll({
            where:{
                tblEmpresaIdEmpresa: tblEmpresaIdEmpresa
            }
        })

        return res.json(seguir)

    }

    async listarSeguidoresCelebridade(req, res) {

        const tblCelebridadeIdCelebridade = req.params.tblCelebridadeIdCelebridade

        const seguir = await SeguirEmpresaCelebridade.findAll({
            where:{
                tblCelebridadeIdCelebridade: tblCelebridadeIdCelebridade
            }
        })

        return res.json(seguir)

    }

    async deixarDeSeguir(req, res) {

        const idSeguirEmpresaCelebridade = req.params.idSeguirEmpresaCelebridade

        SeguirEmpresaCelebridade.destroy(
            {where: {idSeguirEmpresaCelebridade: idSeguirEmpresaCelebridade}}
        ).then(
            () => {
                res.send('Deixou de seguir')
            }
        )

    }

}

module.exports = new SeguirEmpresaCelebridadeController()