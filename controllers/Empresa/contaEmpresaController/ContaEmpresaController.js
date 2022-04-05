const ContaEmpresa = require("../../../models/empresa/contaEmpresa/ContaEmpresa")

class ContaEmpresaController {

    async cadastro(req, res){

        const {agencia, numeroConta, digito} = req.body
        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa
        const tblTipoContumIdTipoConta = req.params.tblTipoContumIdTipoConta
        const tblBancoContumIdBancoConta = req.params.tblBancoContumIdBancoConta

        const contaEmpresa = await ContaEmpresa.create({
            agencia,
            numeroConta,
            digito,
            tblEmpresaIdEmpresa,
            tblTipoContumIdTipoConta,
            tblBancoContumIdBancoConta
        })

        return res.status(201).json(contaEmpresa)

    }

    async listar(req, res) {

        const contaEmpresa = await ContaEmpresa.findAll()

        return res.json(contaEmpresa)

    }

    async deletar(req, res) {

        const idContaEmpresa = req.params.idContaEmpresa

        ContaEmpresa.destroy(
            {where: {idContaEmpresa: idContaEmpresa}}
        ).then(
            () => {
                res.send('Conta excluída')
            }
        )

    }

}

module.exports = new ContaEmpresaController()