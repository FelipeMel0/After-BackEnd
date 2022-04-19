const IntermEventoCelebridade = require("../../models/celebridade/IntermediariaEventoCelebridade")

class IntermEventoCelebridadeController {

    async cadastro(req, res){

        const tblCelebridadeIdCelebridade = req.params.tblCelebridadeIdCelebridade
        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const intermediaria = await IntermEventoCelebridade.create({
            tblCelebridadeIdCelebridade,
            tblEventoIdEvento
        })

        return res.status(201).json(intermediaria)

    }

    async listar(req, res) {

        const intermediaria = await IntermEventoCelebridade.findAll()

        return res.json(intermediaria)

    }

    async deletar(req, res) {

        const idIntermEventoCelebridade = req.params.idIntermEventoCelebridade

        IntermEventoCelebridade.destroy(
            {where: {idIntermEventoCelebridade: idIntermEventoCelebridade}}
        ).then(
            () => {
                res.send('Intermediária excluída')
            }
        )

    }

}

module.exports = new IntermEventoCelebridadeController()