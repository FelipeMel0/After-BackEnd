const Empresa = require("../../models/empresa/Empresa")

class EmpresaController{

    async cadastro(req, res) {

        const {cnpj} = req.body
        const tblPerfilIdPerfil = req.params.tblPerfilIdPerfil

        const empresa = await Empresa.create({
            cnpj,
            tblPerfilIdPerfil
        })

        return res.status(201).json(empresa)
    }

    async listar(req, res) {

        const empresa = await Empresa.findAll()

        return res.json(empresa)

    }

    async deletar(req, res) {

        const idEmpresa = req.params.idEmpresa

        Empresa.destroy(
            {where: {idEmpresa: idEmpresa}}
        ).then(
            () => {
                res.send('Empresa excluída')
            }
        )

    }
    
    async editar(req, res) {

        const idEmpresa = req.params.idEmpresa

        Empresa.update(req.body, {
            where: {idEmpresa: idEmpresa}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update na Empresa com id=${idEmpresa}.`
              });
            }
          })

    }

}

module.exports = new EmpresaController()