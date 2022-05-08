//const express = require("express")

// const { json } = require('express/lib/response')
const Perfil = require('../models/perfil/Perfil')
const UsuarioComum = require('../models/usuarioComum/UsuarioComum')
const Empresa = require('../models/empresa/Empresa')
const Endereco = require('../models/usuarioComum/Endereco')

class PerfilController {
    async cadastroUsuarioComum(req, res) {

        const {
            nickname,
            email,
            senha,
            biografia
        } = req.body
        // const imagemPerfil = req.files.imagemPerfil[0].path
        // const imagemFundo = req.files.imagemFundo[0].path
        let imagemPerfil
        let imagemFundo

        if (req.files.imagemPerfil == undefined) {
            imagemPerfil = null
        } else {
            imagemPerfil = req.files.imagemPerfil[0].path
        }

        if (req.files.imagemFundo == undefined) {
            imagemFundo = null
        } else {
            imagemFundo = req.files.imagemFundo[0].path
        }

        console.log(req.file)
        const perfil = await Perfil.create({
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo,
            biografia
        })

        const tblPerfilIdPerfil = perfil.idPerfil

        //GRAVAR USUARIO

        const {
            nome,
            dataNasc
        } = req.body

        const usuarioComum = await UsuarioComum.create({
            nome,
            dataNasc,
            tblPerfilIdPerfil
        })

        return res.status(201).json({
            message: 'Cadastro realizado com sucesso!'
        })

    }

    async cadastroUsuarioComumEndereco(req, res) {
        const {
            nickname,
            email,
            senha,
            biografia
        } = req.body
        // const imagemPerfil = req.files.imagemPerfil[0].path
        // const imagemFundo = req.files.imagemFundo[0].path
        let imagemPerfil
        let imagemFundo

        if (req.files.imagemPerfil == undefined) {
            imagemPerfil = null
        } else {
            imagemPerfil = req.files.imagemPerfil[0].path
        }

        if (req.files.imagemFundo == undefined) {
            imagemFundo = null
        } else {
            imagemFundo = req.files.imagemFundo[0].path
        }

        console.log(req.file)

        const perfil = await Perfil.create({
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo,
            biografia
        })

        const tblPerfilIdPerfil = perfil.idPerfil

        //Gravar usuário

        const {
            nome,
            dataNasc
        } = req.body

        const usuarioComum = await UsuarioComum.create({
            nome,
            dataNasc,
            tblPerfilIdPerfil
        })

        const tblUsuarioComumIdUsuarioComum = usuarioComum.idUsuarioComum

        //Gravar endereço

        const {
            cep,
            cidade,
            estado
        } = req.body

        const endereco = await Endereco.create({
            cep,
            cidade,
            estado,
            tblUsuarioComumIdUsuarioComum
        })

        return res.status(201).json({
            message: 'Cadastro realizado com sucesso!'
        })

    }

    async cadastroEmpresa(req, res) {
        const {
            nickname,
            email,
            senha,
            biografia
        } = req.body

        let imagemPerfil
        let imagemFundo

        if (req.files.imagemPerfil == undefined) {
            imagemPerfil = null
        } else {
            imagemPerfil = req.files.imagemPerfil[0].path
        }

        if (req.files.imagemFundo == undefined) {
            imagemFundo = null
        } else {
            imagemFundo = req.files.imagemFundo[0].path
        }

        const perfil = await Perfil.create({
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo,
            biografia
        })

        const tblPerfilIdPerfil = perfil.idPerfil

        //Gravar empresa

        const {
            cnpj
        } = req.body

        const empresa = await Empresa.create({
            cnpj,
            tblPerfilIdPerfil
        })

        return res.status(201).json({
            message: 'Cadastro realizado com sucesso!'
        })
    }

    async listar(req, res) {
        const perfil = await Perfil.findAll()

        return res.json(perfil)
    }

    async acharPorId(req, res) {

        const {
            idPerfil
        } = req.params

        const perfil = Perfil.findByPk(idPerfil).then((perfilId) => {
            res.send(perfilId)
        })

    }

    async deletar(req, res) {

        const idPerfil = req.params.idPerfil

        Perfil.destroy({
            where: {
                idPerfil: idPerfil
            }
        }).then(
            () => {
                res.send('Perfil excluído')
            }
        )

    }

    async editar(req, res) {

        const idPerfil = req.params.idPerfil

        const {
            nickname,
            email,
            senha,
            biografia,
            imagemPerfil,
            imagemFundo
        } = req.body

        if (req.files.imagemPerfil != null) {
            imagemPerfil = req.files.imagemPerfil[0].path
        } 

        if (req.files.imagemFundo != null) {
            imagemFundo = req.files.imagemFundo[0].path
        }

        Perfil.update({
            nickname,
            email,
            senha,
            biografia,
            imagemPerfil,
            imagemFundo
        }, {
            where: {
                idPerfil: idPerfil
            }
        }).then(
            ()=>{
                res.send('Dados alterados com sucesso!');
            }
        );

    }

    async editarPerfilUsuarioComum(req, res) {

        const idPerfil = req.params.idPerfil

        let {
            nickname,
            email,
            senha,
            biografia,
            imagemPerfil,
            imagemFundo
        } = req.body

        if (req.files.imagemPerfil != null) {
            imagemPerfil = req.files.imagemPerfil[0].path
        } 

        if (req.files.imagemFundo != null) {
            imagemFundo = req.files.imagemFundo[0].path
        }

        Perfil.update({
            nickname,
            email,
            senha,
            biografia,
            imagemPerfil,
            imagemFundo
        }, {
            where: {
                idPerfil: idPerfil
            }
        })

        const {
            nome,
            dataNasc
        } = req.body

        UsuarioComum.update({
            nome,
            dataNasc
        }, {
            where: {
                tblPerfilIdPerfil: idPerfil
            }
        }).then(
            () => {
                res.send('Perfil editado')
            }
        )

    }

}

module.exports = new PerfilController();