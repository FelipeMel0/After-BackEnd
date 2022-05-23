const db = require('../../models/database/db')
const ImagensEvento = require('../../models/evento/ImagensEvento')


class ImagensEventoController {

    async cadastro(req, res){

        const imagem = req.files.imagem[0].path 

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const imagemEvento = ImagensEvento.create({
            imagem,
            tblEventoIdEvento
        })

        return res.send(imagemEvento)

    }

    async listar(req, res){

        const imagem = await ImagensEvento.findAll()

        return res.json(imagem)

    }

    async listarPorIdEvento(req, res){

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const imagem = await ImagensEvento.findAll({
            where: {
                tblEventoIdEvento: tblEventoIdEvento
            }
        })

        return res.json(imagem)
        
    }

    async deletar(req, res){

        const idImagensEvento = req.params.idImagensEvento

        ImagensEvento.destroy(
            {where: {idImagensEvento: idImagensEvento}}
        ).then(
            () => {
                res.send('Imagem de evento excluída')
            }
        )

    }

}

module.exports = new ImagensEventoController()