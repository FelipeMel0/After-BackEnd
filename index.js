const express = require("express")
const app = express()

const perfil = require('./models/Perfil')
const usuarioComum = require('./models/UsuarioComum')
const empresa = require('./models/Empresa')

const perfilController = require('./controllers/PerfilController');
app.use('/', perfilController);

app.listen(4000, function(){
    console.log("Servidor rodando na url http://localhost:4000")
})

//Configurando a porta que o sistema usará