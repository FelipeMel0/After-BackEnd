const Ingresso = require('../../../models/evento/ingresso/Ingresso')

class IngressoController {

    async cadastro(req, res){

        const {qrCode} = req.body
        const tblVariedadeIngressoLoteIdVariedadeIngressoLote = req.params.tblVariedadeIngressoLoteIdVariedadeIngressoLote
        const tblCompraIdCompra = req.params.tblCompraIdCompra

        const ingresso = await Ingresso.create({
            qrCode,
            tblVariedadeIngressoLoteIdVariedadeIngressoLote,
            tblCompraIdCompra
        })

        return res.status(201).json(ingresso)

    }

    async listar(req, res) {

        const ingresso = await Ingresso.findAll()

        return res.json(ingresso)

    }

    async acharPorId(req, res) {

        const {
            tblCompraIdCompra
        } = req.params

        const compra = Ingresso.findAll({
            where: {
                tblCompraIdCompra: tblCompraIdCompra
            }
        }).then((compras)=>{
            res.send(compras)
        })
    }

}

module.exports = new IngressoController()