const EnderecoEvento = require('../../models/evento/EnderecoEvento')

class EnderecoEventoController {

    async cadastro(req, res){

        const {cep, logradouro, complemento, bairro, cidade, estado} = req.body

        const tblEventoIdEvento = req.params.tblEventoIdEvento

        const enderecoEvento = await EnderecoEvento.create({
            cep,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            tblEventoIdEvento
        })

        return res.status(201).json(enderecoEvento)

    }

    async listar(req, res) {

        const enderecoEvento = await EnderecoEvento.findAll()

        return res.json(enderecoEvento)

    }

    async deletar(req, res) {

        const idEnderecoEvento = req.params.idEnderecoEvento

        EnderecoEvento.destroy(
            {where: {idEnderecoEvento: idEnderecoEvento}}
        ).then(
            () => {
                res.send('Endereço excluído')
            }
        )

    }

    async editar(req, res) {

        const idEnderecoEvento = req.params.idEnderecoEvento

        EnderecoEvento.update(req.body, {
            where: {idEnderecoEvento: idEnderecoEvento}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update no Endereço com id=${idEnderecoEvento}.`
              });
            }
          })

    }

}

module.exports = new EnderecoEventoController()