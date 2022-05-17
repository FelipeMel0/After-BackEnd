const BancoConta = require("../../../models/empresa/contaEmpresa/BancoConta")
const ContaEmpresa = require("../../../models/empresa/contaEmpresa/ContaEmpresa")
const TipoConta = require("../../../models/empresa/contaEmpresa/TipoConta")

class ContaEmpresaController {

    //Passando tipo de conta e banco pelos parâmetros
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

    //Passando tipo de conta e banco pelo body da requisição
    async cadastrarConta(req, res){

        const {agencia, numeroConta, digito, tblTipoContumIdTipoConta, tblBancoContumIdBancoConta} = req.body
        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa

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

    async cadastroCompleto(req, res){

        const {nomeTipo} = req.body

        const tipoConta = await TipoConta.create({
            nomeTipo
        })

        const tblTipoContumIdTipoConta = tipoConta.idTipoConta


        const {nomeBanco} = req.body

        const bancoConta = await BancoConta.create({
            nomeBanco
        })

        const tblBancoContumIdBancoConta = bancoConta.idBancoConta


        const {agencia, numeroConta, digito} = req.body
        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa

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

    async listarContasDeEmpresa(req, res) {

        const {
            tblEmpresaIdEmpresa
        } = req.params

        const contaEmpresa = await ContaEmpresa.findAll({
            where:{
                tblEmpresaIdEmpresa: tblEmpresaIdEmpresa
            } 
        })

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