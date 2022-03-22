const express = require("express")

const perfil = require('../models/Perfil')

const router = express.Router();

router.post(
    '/perfil/cadastrarPerfil',
    (req, res)=>{
    
        let { nickname } = req.body;
        let { email } = req.body;
        let { senha } = req.body;
        let { imagemPerfil } = req.body;
        let { imagemFundo } = req.body;

        perfil.create(
            {
            nickname,
            email,
            senha,
            imagemPerfil,
            imagemFundo 
            } 

        ).then(
            ()=>{
                res.send('DADOS INSERIDOS COM SUCESSO!');
            }
        );
    }
);

module.exports = router