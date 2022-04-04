const BancoConta = require("../../../models/empresa/contaEmpresa/BancoConta")

class BancoContaController {

    async cadastro(req, res){

        const {nomeBanco} = req.body

        const bancoConta = await BancoConta.create({
            nomeBanco
        })

        return res.status(201).json(bancoConta)

    }

    async listar(req, res) {

        const bancoConta = await BancoConta.findAll()

        return res.json(bancoConta)

    }

    async deletar(req, res) {

        const idBancoConta = req.params.idBancoConta

        BancoConta.destroy(
            {where: {idBancoConta: idBancoConta}}
        ).then(
            () => {
                res.send('Conta excluída')
            }
        )

    }

}

module.exports = new BancoContaController()