const FaixaEtaria = require('../../models/evento/FaixaEtaria')

class FaixaEtariaController {

    async cadastro(req, res){

        const {idade} = req.body

        const faixaEtaria = await FaixaEtaria.create({
            idade
        })

        return res.status(201).json(faixaEtaria)

    }

    async listar(req, res) {

        const faixaEtaria = await FaixaEtaria.findAll()

        return res.json(faixaEtaria)

    }

    async deletar(req, res) {

        const idFaixaEtaria = req.params.idFaixaEtaria

        FaixaEtaria.destroy(
            {where: {idFaixaEtaria: idFaixaEtaria}}
        ).then(
            () => {
                res.send('Faixa etária excluída')
            }
        )

    }

}

module.exports = new FaixaEtariaController()