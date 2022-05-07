const ImagensEvento = require('../../models/evento/ImagensEvento')


class ImagensEventoController {

    async cadastro(req, res){

        const imagem = req.files.imagem[0].path + req.files.imagem[1].path

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const imagemEvento = ImagensEvento.create({
            imagem,
            tblEventoIdEvento
        })

        return res.send(imagemEvento)

    }

}

module.exports = new ImagensEventoController()