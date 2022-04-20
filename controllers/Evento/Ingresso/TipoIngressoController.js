const TipoIngresso = require('../../../models/evento/ingresso/TipoIngresso')

class TipoIngressoController {

    async cadastro(req, res){

        const {tipoIngresso} = req.body

        const ingressoTipo = await TipoIngresso.create({
            tipoIngresso
        })

        return res.status(201).json(ingressoTipo)

    }

    async listar(req, res) {

        const ingressoTipo = await TipoIngresso.findAll()

        return res.json(ingressoTipo)

    }

    async deletar(req, res) {

        const idTipoIngresso = req.params.idTipoIngresso

        TipoIngresso.destroy(
            {where: {idTipoIngresso: idTipoIngresso}}
        ).then(
            () => {
                res.send('Tipo de ingresso excluído')
            }
        )

    }

}

module.exports = new TipoIngressoController()