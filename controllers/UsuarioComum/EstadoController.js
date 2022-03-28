const Estado = require('../../models/usuarioComum/Estado')

class EstadoController {

    async cadastro(req, res){

        const {estadoSigla} = req.body

        const estado = await Estado.create({
            estadoSigla
        })

        return res.status(201).json(estado)

    }

    async listar(req, res) {

        const estado = await Estado.findAll()

        return res.json(estado)

    }

    async deletar(req, res) {

        const idEstado = req.params.idEstado

        Estado.destroy(
            {where: {idEstado: idEstado}}
        ).then(
            () => {
                res.send('Estado excluído')
            }
        )

    }

    async editar(req, res) {

        const idEstado = req.params.idEstado

        Estado.update(req.body, {
            where: {idEstado: idEstado}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update no Usuário com id=${idEstado}.`
              });
            }
          })

    }

}

module.exports = new EstadoController()