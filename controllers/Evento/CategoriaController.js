const Categoria = require('../../models/evento/Categoria')

class CategoriaController {

    async cadastro(req, res){

        const {nomeCategoria} = req.body

        const categoria = await Categoria.create({
            nomeCategoria
        })

        return res.status(201).json(categoria)

    }

    async listar(req, res) {

        const categoria = await Categoria.findAll()

        return res.json(categoria)

    }

    async deletar(req, res) {

        const idCategoria = req.params.idCategoria

        Categoria.destroy(
            {where: {idCategoria: idCategoria}}
        ).then(
            () => {
                res.send('Categoria excluída')
            }
        )

    }

}

module.exports = new CategoriaController()