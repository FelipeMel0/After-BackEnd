const express = require("express")
const app = express()
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

app.use(express.json())

app.use(routes)

app.use(cors())

app.use('/uploads', express.static('uploads'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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
const enderecoEvento = require('./models/evento/EnderecoEvento')
const assunto = require('./models/evento/Assunto')
const intermEventoAssunto = require('./models/evento/IntermEventoAssunto')
const imagensEvento = require('./models/evento/ImagensEvento')

//Chamadas de interação
const comentario = require('./models/evento/interação/Comentario')
const eventosCurtidos = require('./models/evento/interação/EventosCurtidos')

const seguirEmpresaUsuario = require('./models/evento/interação/Seguir/SeguirEmpresaUsuario')
const seguirUsuarioCelebridade = require('./models/evento/interação/Seguir/SeguirUsuarioCelebridade')
const seguirEmpresaCelebridade = require('./models/evento/interação/Seguir/SeguirEmpresaCelebridade')

//Ingresso
const tipoIngresso = require('./models/evento/ingresso/TipoIngresso')
const lote = require('./models/evento/ingresso/Lote')
const variedadeIngressoLote = require('./models/evento/ingresso/VariedadeIngressoLote')
const ingresso = require('./models/evento/ingresso/Ingresso')
const compra = require('./models/evento/ingresso/Compra')

app.listen(4000, function () {
    console.log("Servidor rodando na url http://localhost:4000")
})

//Configurando a porta que o sistema usará