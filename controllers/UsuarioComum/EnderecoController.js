const Endereco = require('../../models/usuarioComum/Endereco')

class EnderecoController{

    async cadastro(req, res){

        const {cep, cidade, estado} = req.body
        const tblUsuarioComumIdUsuarioComum = req.params.tblUsuarioComumIdUsuarioComum
       
        const endereco = await Endereco.create({
            cep,
            cidade,
            estado,
            tblUsuarioComumIdUsuarioComum
        })

        return res.status(201).json(endereco)

    }

    async listar(req, res) {

        const endereco = await Endereco.findAll()

        return res.json(endereco)

    }

    async deletar(req, res) {

        const idEndereco = req.params.idEndereco

        Endereco.destroy(
            {where: {idEndereco: idEndereco}}
        ).then(
            () => {
                res.send('Endereço excluído')
            }
        )

    }

    async editar(req, res) {

        const idEndereco = req.params.idEndereco

        Endereco.update(req.body, {
            where: {idEndereco: idEndereco}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update no Usuário com id=${idEndereco}.`
              });
            }
          })

    }

}

module.exports = new EnderecoController()