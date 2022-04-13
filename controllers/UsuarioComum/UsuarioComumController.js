const UsuarioComum = require('../../models/usuarioComum/UsuarioComum')

class UsuarioComumController{

    async cadastro(req, res) {

        const {nome, dataNasc} = req.body
        const tblPerfilIdPerfil = req.params.tblPerfilIdPerfil

        const usuarioComum = await UsuarioComum.create({
            nome,
            dataNasc,
            tblPerfilIdPerfil
        })

        return res.status(201).json(usuarioComum)
    }

    async listar(req, res) {

        const usuarioComum = await UsuarioComum.findAll()

        return res.json(usuarioComum)

    }

    async deletar(req, res) {

        const idUsuarioComum = req.params.idUsuarioComum

        UsuarioComum.destroy(
            {where: {idUsuarioComum: idUsuarioComum}}
        ).then(
            () => {
                res.send('Usuário excluído')
            }
        )

    }

    async editar(req, res) {

        const idUsuarioComum = req.params.idUsuarioComum

        UsuarioComum.update(req.body, {
            where: {idUsuarioComum: idUsuarioComum}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update no Usuário com id=${idUsuarioComum}.`
              });
            }
          })

    }

}

module.exports = new UsuarioComumController()