//const express = require("express")

const Perfil = require('../models/Perfil')

class PerfilController {
    async cadastro(req, res) {
      const perfil = await Perfil.create(req.body);
  
      return res.json(perfil);
    }
  
    async index(req, res){
      const perfil = await Perfil.findAll();
  
      return res.json(perfil);
    }
  }
  
  module.exports = new PerfilController();