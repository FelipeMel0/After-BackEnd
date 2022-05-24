const { sequelize, Sequelize } = require("../../../models/database/db")
const Evento = require("../../../models/evento/Evento")

class PesquisarEventoController {

    async pesquisar(req, res){

        const op = Sequelize.Op
        const titulo = req.body.titulo 

        const pesquisa = await Evento.findAll({
            where: {
                titulo: {[op.like]: `%${titulo}%`}
            }
        })

        return res.json(pesquisa)

    }

}

module.exports = new PesquisarEventoController()