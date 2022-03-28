const express = require("express")
const app = express()

const routes = require('./routes')

app.use(express.json())

app.use(routes)

const perfil = require('./models/perfil/Perfil')
const usuarioComum = require('./models/usuarioComum/UsuarioComum')
const empresa = require('./models/empresa/Empresa')

// const perfilController = require('./controllers/PerfilController');
// app.use('/', perfilController);

app.listen(4000, function(){
    console.log("Servidor rodando na url http://localhost:4000")
})

//Configurando a porta que o sistema usará