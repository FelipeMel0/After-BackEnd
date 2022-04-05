const TipoConta = require("../../../models/empresa/contaEmpresa/TipoConta")

class TipoContaController {

    async cadastro(req, res){

        const {nomeTipo} = req.body

        const tipoConta = await TipoConta.create({
            nomeTipo
        })

        return res.status(201).json(tipoConta)

    }

    async listar(req, res) {

        const tipoConta = await TipoConta.findAll()

        return res.json(tipoConta)

    }

    async deletar(req, res) {

        const idTipoConta = req.params.idTipoConta

        TipoConta.destroy(
            {where: {idTipoConta: idTipoConta}}
        ).then(
            () => {
                res.send('Tipo excluído')
            }
        )

    }

}

module.exports = new TipoContaController()