const TipoEvento = require('../../models/evento/TipoEvento')

class TipoEventoController {

    async cadastro(req, res){

        const {tipo} = req.body

        const tipoEvento = await TipoEvento.create({
            tipo
        })

        return res.status(201).json(tipoEvento)

    }

    async listar(req, res) {

        const tipoEvento = await TipoEvento.findAll()

        return res.json(tipoEvento)

    }

    async deletar(req, res) {

        const idTipoEvento = req.params.idTipoEvento

        TipoEvento.destroy(
            {where: {idTipoEvento: idTipoEvento}}
        ).then(
            () => {
                res.send('Tipo de evento excluído')
            }
        )

    }

}

module.exports = new TipoEventoController()