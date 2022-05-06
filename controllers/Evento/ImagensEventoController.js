const ImagensEvento = require('../../models/evento/ImagensEvento')


class ImagensEventoController {

    async cadastro(req, res){

        const imagem = req.files

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const imagemEvento = ImagensEvento.create({
            imagem,
            tblEventoIdEvento
        })

        return res.send(req.files)

    }

}

module.exports = new ImagensEventoController()