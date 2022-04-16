const TipoCelebridade = require("../../models/celebridade/TipoCelebridade")

class TipoCelebridadeController {

    async cadastro(req, res){

        const {tipo} = req.body

        const tipoCelebridade= await TipoCelebridade.create({
            tipo
        })

        return res.status(201).json(tipoCelebridade)

    }

    async listar(req, res) {

        const tipoCelebridade = await TipoCelebridade.findAll()

        return res.json(tipoCelebridade)

    }

    async deletar(req, res) {

        const idTipoCelebridade = req.params.idTipoCelebridade

        TipoCelebridade.destroy(
            {where: {idTipoCelebridade: idTipoCelebridade}}
        ).then(
            () => {
                res.send('Tipo de celebridade excluído')
            }
        )

    }

}

module.exports = new TipoCelebridadeController()