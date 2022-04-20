const express = require("express")
const app = express()
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require('body-parser')

app.use(express.json())

app.use(routes)

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

const perfil = require('./models/perfil/Perfil')

//Chamadas de Usuário Comum
const usuarioComum = require('./models/usuarioComum/UsuarioComum')
const estado = require('./models/usuarioComum/Estado')
const cidade = require('./models/usuarioComum/Cidade')
const endereco = require('./models/usuarioComum/Endereco')
const verificacaoUsuario = require('./models/usuarioComum/VerificacaoUsuario')

//Chamadas de Empresa
const empresa = require('./models/empresa/Empresa')
const verificacao = require('./models/empresa/Verificacao')
const bancoConta = require('./models/empresa/contaEmpresa/BancoConta')
const tipoConta = require('./models/empresa/contaEmpresa/TipoConta')
const contaEmpresa = require('./models/empresa/contaEmpresa/ContaEmpresa')

//Chamadas de Celebridade
const tipoCelebridade = require('./models/celebridade/TipoCelebridade')
const celebridade = require("./models/celebridade/Celebridade")
const intermEventoCelebridade = require("./models/celebridade/IntermediariaEventoCelebridade")

//Chamadas de Evento
const tipoEvento = require('./models/evento/TipoEvento')
const faixaEtaria = require('./models/evento/FaixaEtaria')
const categoria = require('./models/evento/Categoria')
const evento = require('./models/evento/Evento')

//Ingresso
const tipoIngresso = require('./models/evento/ingresso/TipoIngresso')

app.listen(4000, function(){
    console.log("Servidor rodando na url http://localhost:4000")
})

//Configurando a porta que o sistema usará