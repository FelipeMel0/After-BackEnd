const db = require('../../models/database/db')
const ImagensEvento = require('../../models/evento/ImagensEvento')
const fs = require('fs')

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

        ImagensEvento.findByPk(idImagensEvento).then((ImagensEvento) => {
            
            let imagem = ImagensEvento.imagem

            ImagensEvento.destroy({
                where: {
                    idImagensEvento: idImagensEvento
                }
            }).then(
                () => {
                    if (imagem != null) {
                        fs.unlink(imagem, (error) => {

                            if (error) {
                                console.log('Erro ao excluir a imagem: ' + error);
                            } else {
                                console.log('Imagem excluída com sucesso!');
                            }

                        })
                    }

                    res.send('Imagem excluída')

                }
            )
        })

    }

}

module.exports = new ImagensEventoController()