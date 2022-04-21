const Compra = require('../../../models/evento/ingresso/Compra')

class CompraController {

    async cadastro(req, res) {

        const {
            totalLiquido,
            totalBruto
        } = req.body
        const tblUsuarioComumIdUsuarioComum = req.params.tblUsuarioComumIdUsuarioComum

        const compra = await Compra.create({
            totalLiquido,
            totalBruto,
            tblUsuarioComumIdUsuarioComum
        })

        return res.status(201).json(compra)

    }

    async listar(req, res) {

        const compra = await Compra.findAll()

        return res.json(compra)

    }

    async acharPorId(req, res) {

        const {
            tblUsuarioComumIdUsuarioComum
        } = req.params

        const compra = Compra.findAll({
            where: {
                tblUsuarioComumIdUsuarioComum: tblUsuarioComumIdUsuarioComum
            }
        }).then((compras)=>{
            res.send(compras)
        })
    }

}

module.exports = new CompraController()