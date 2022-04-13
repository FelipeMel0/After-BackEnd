//const express = require("express")

const { json } = require('express/lib/response')
const Perfil = require('../models/perfil/Perfil')
const UsuarioComum = require('../models/usuarioComum/UsuarioComum')
const Empresa = require('../models/empresa/Empresa')
const Endereco = require('../models/usuarioComum/Endereco')

class PerfilController {
    async cadastroUsuarioComum(req, res) {

        const {nickname, email, senha, imagemPerfil, imagemFundo} = req.body

        const perfil = await Perfil.create({
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo
        })

        const tblPerfilIdPerfil = perfil.idPerfil

        //GRAVAR USUARIO

        const {nome, dataNasc, biografia} = req.body

        const usuarioComum = await UsuarioComum.create({
            nome, 
            dataNasc,
            biografia,
            tblPerfilIdPerfil
        })

        return res.status(201).json({message: 'Cadastro realizado com sucesso!'})
        
    }

    async cadastroUsuarioComumEndereco(req, res) {
        const {nickname, email, senha, imagemPerfil, imagemFundo} = req.body

        const perfil = await Perfil.create({
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo
        })

        const tblPerfilIdPerfil = perfil.idPerfil

        //Gravar usuário

        const {nome, dataNasc, biografia} = req.body

        const usuarioComum = await UsuarioComum.create({
            nome, 
            dataNasc,
            biografia,
            tblPerfilIdPerfil
        })

        const tblUsuarioComumIdUsuarioComum = usuarioComum.idUsuarioComum

        //Gravar endereço

        const {cep, cidade, estado} = req.body
        
        const endereco = await Endereco.create({
            cep,
            cidade,
            estado,
            tblUsuarioComumIdUsuarioComum
        })

        return res.status(201).json({message: 'Cadastro realizado com sucesso!'})

    }

    async cadastroEmpresa (req, res) {
        const {nickname, email, senha, imagemPerfil, imagemFundo} = req.body

        const perfil = await Perfil.create({
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo
        })

        const tblPerfilIdPerfil = perfil.idPerfil

        //Gravar empresa

        const {cnpj} = req.body

        const empresa = await Empresa.create({
            cnpj,
            tblPerfilIdPerfil
        })

        return res.status(201).json({message: 'Cadastro realizado com sucesso!'})
    }

    async listar(req, res) {
        const perfil = await Perfil.findAll()

        return res.json(perfil)
    }

    async acharPorId(req, res){
        
        const {idPerfil} = req.params

        const perfil = Perfil.findByPk(idPerfil).then((perfilId)=>{
            res.send(perfilId)
        })

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