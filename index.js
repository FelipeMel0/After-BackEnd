const express = require("express")
const app = express()
const cors = require("cors")
const routes = require('./routes')

app.use(express.json())

app.use(routes)

app.use(cors())

app.use((req, res, next) => {
    req.header("Access-Control-Allow-Credentials", true)
    req.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE")
    req.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE")
        return res.status(200).send({})
    }

    next()
})

const perfil = require('./models/perfil/Perfil')

//Chamadas de Usuário Comum
const usuarioComum = require('./models/usuarioComum/UsuarioComum')
const estado = require('./models/usuarioComum/Estado')
const cidade = require('./models/usuarioComum/Cidade')
const endereco = require('./models/usuarioComum/Endereco')

const empresa = require('./models/empresa/Empresa')
const verificacao = require('./models/empresa/Verificacao')
const bancoConta = require('./models/empresa/contaEmpresa/BancoConta')
const tipoConta = require('./models/empresa/contaEmpresa/TipoConta')
const contaEmpresa = require('./models/empresa/contaEmpresa/ContaEmpresa')

const tipoEvento = require('./models/evento/TipoEvento')
const faixaEtaria = require('./models/evento/FaixaEtaria')
const categoria = require('./models/evento/Categoria')
const evento = require('./models/evento/Evento')

app.listen(4000, function(){
    console.log("Servidor rodando na url http://localhost:4000")
})

//Configurando a porta que o sistema usará