const UsuarioComum = require('../models/UsuarioComum')

class UsuarioComumController{

    async cadastro(req, res) {

        const {nome, dataNasc, biografia} = req.body
        const tblPerfilIdPerfil = req.params.tblPerfilIdPerfil

        const usuarioComum = await UsuarioComum.create({
            nome,
            dataNasc,
            biografia,
            tblPerfilIdPerfil
        })

        return res.status(201).json(usuarioComum)
    }

}

module.exports = new UsuarioComumController()