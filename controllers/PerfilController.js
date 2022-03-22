//const express = require("express")

const Perfil = require('../models/Perfil')

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

        return res.json(perfil)
    }

    async index(req, res) {
        const perfil = await Perfil.findAll()

        return res.json(perfil)
    }

    async deletar(req, res) {

        const {idPerfil} = req.body

        Perfil.destroy(
            {where: {idPerfil}}
        ).then(
            () => {
                res.send('Perfil excluído')
            }
        )

    }

}

module.exports = new PerfilController();