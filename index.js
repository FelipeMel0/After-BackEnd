const express = require("express")
const app = express()

const routes = require('./routes')

app.use(express.json())

app.use(routes)

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