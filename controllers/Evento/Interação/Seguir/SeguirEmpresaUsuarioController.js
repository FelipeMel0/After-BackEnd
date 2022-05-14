const SeguirEmpresaUsuario = require("../../../../models/evento/interação/Seguir/SeguirEmpresaUsuario")

class SeguirEmpresaUsuarioController {

    async seguir(req, res){

        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa
        const tblUsuarioComumIdUsuarioComum = req.params.tblUsuarioComumIdUsuarioComum

        const seguir = await SeguirEmpresaUsuario.create({
            tblEmpresaIdEmpresa,
            tblUsuarioComumIdUsuarioComum
        })

        return res.status(201).json(seguir)

    }

    async listarSeguidoresEmpresa(req, res) {

        const tblEmpresaIdEmpresa = req.params.tblEmpresaIdEmpresa

        const seguir = await SeguirEmpresaUsuario.findAll({
            where:{
                tblEmpresaIdEmpresa: tblEmpresaIdEmpresa
            }
        })

        return res.json(seguir)

    }

    async listarSeguidoresUsuarioComum(req, res) {

        const tblUsuarioComumIdUsuarioComum = req.params.tblUsuarioComumIdUsuarioComum

        const seguir = await SeguirEmpresaUsuario.findAll({
            where:{
                tblUsuarioComumIdUsuarioComum: tblUsuarioComumIdUsuarioComum
            }
        })

        return res.json(seguir)

    }

    async deixarDeSeguir(req, res) {

        const idSeguirEmpresaUsuario = req.params.idSeguirEmpresaUsuario

        SeguirEmpresaUsuario.destroy(
            {where: {idSeguirEmpresaUsuario: idSeguirEmpresaUsuario}}
        ).then(
            () => {
                res.send('Deixou de seguir')
            }
        )

    }

}

module.exports = new SeguirEmpresaUsuarioController()