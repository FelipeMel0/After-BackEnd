const Cidade = require('../../models/usuarioComum/Cidade')

class CidadeController {

    async cadastro(req, res){

        const {nomeCidade} = req.body
        const tblEstadoIdEstado = req.params.tblEstadoIdEstado

        const cidade = await Cidade.create({
            nomeCidade,
            tblEstadoIdEstado
        })

        return res.status(201).json(cidade)

    }

    async listar(req, res) {

        const cidade = await Cidade.findAll()

        return res.json(cidade)

    }

    async deletar(req, res) {

        const idCidade = req.params.idCidade

        Cidade.destroy(
            {where: {idCidade: idCidade}}
        ).then(
            () => {
                res.send('Cidade excluída')
            }
        )

    }

    async editar(req, res) {

        const idCidade = req.params.idCidade

        Cidade.update(req.body, {
            where: {idCidade: idCidade}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update no Usuário com id=${idCidade}.`
              });
            }
          })

    }

}

module.exports = new CidadeController()