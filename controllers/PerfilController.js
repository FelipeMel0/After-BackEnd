//const express = require("express")

const Perfil = require('../models/perfil/Perfil')

class PerfilController {
    async cadastro(req, res) {

        const {nickname, email, senha, imagemPerfil, imagemFundo} = req.body

        const perfil = await Perfil.create({
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo
        })

        return res.status(201).json(perfil)
    }

    async listar(req, res) {
        const perfil = await Perfil.findAll()

        return res.json(perfil)
    }

    async deletar(req, res) {

        const idPerfil = req.params.idPerfil

        Perfil.destroy(
            {where: {idPerfil: idPerfil}}
        ).then(
            () => {
                res.send('Perfil excluído')
            }
        )

    }

    async editar(req, res) {

        const idPerfil = req.params.idPerfil

        Perfil.update(req.body, {
            where: {idPerfil: idPerfil}
        }).then(num => {
            if (num == 1) {
              res.send({
                message: "Update funcionou"
              });
            } else {
              res.send({
                message: `Erro ao dar update no Perfil com id=${idPerfil}.`
              });
            }
          })

    }

}

module.exports = new PerfilController();