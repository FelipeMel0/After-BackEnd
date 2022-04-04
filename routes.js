const {Router} = require('express')
const { route } = require('express/lib/application')

const routes = new Router()

//Rotas de Perfil
const PerfilController = require('./controllers/PerfilController')

routes.post('/perfil/cadastrarPerfil', PerfilController.cadastro)
routes.get('/perfil/listarPerfis', PerfilController.listar)
routes.delete('/perfil/deletarPerfil/:idPerfil', PerfilController.deletar)
routes.put('/perfil/editarPerfil/:idPerfil', PerfilController.editar)

//Rotas de Usuário Comum
const UsuarioComum = require('./controllers/UsuarioComum/UsuarioComumController')

routes.post("/usuarioComum/cadastrarUsuario/:tblPerfilIdPerfil", UsuarioComum.cadastro)
routes.get("/usuarioComum/listarUsuarios", UsuarioComum.listar)
routes.delete("/usuarioComum/deletarUsuario/:idUsuarioComum", UsuarioComum.deletar)
routes.put("/usuarioComum/editarUsuario/:idUsuarioComum", UsuarioComum.editar)

const Estado = require('./controllers/UsuarioComum/EstadoController')

routes.post("/estado/cadastrarEstado", Estado.cadastro)
routes.get("/estado/listarEstados", Estado.listar)
routes.delete("/estado/deletarEstado/:idEstado", Estado.deletar)
routes.put("/estado/editarEstado/:idEstado", Estado.editar)

const Cidade = require('./controllers/UsuarioComum/CidadeController')

routes.post("/cidade/cadastrarCidade/:tblEstadoIdEstado", Cidade.cadastro)
routes.get("/cidade/listarCidades", Cidade.listar)
routes.delete("/cidade/deletarCidade/:idCidade", Cidade.deletar)
routes.put("/cidade/editarCidade/:idCidade", Cidade.editar)

const Endereco = require('./controllers/UsuarioComum/EnderecoController')

routes.post("/endereco/cadastrarEndereco/:tblUsuarioComumIdUsuarioComum/:tblCidadeIdCidade", Endereco.cadastro)
routes.get("/endereco/listarEnderecos", Endereco.listar)
routes.delete("/endereco/deletarEndereco/:idEndereco", Endereco.deletar)
routes.put("/endereco/editarEndereco/:idEndereco", Endereco.editar)

//Rotas de Empresas
const Empresa = require("./controllers/Empresa/EmpresaController")

routes.post("/empresa/cadastrarEmpresa/:tblPerfilIdPerfil", Empresa.cadastro)
routes.get("/empresa/listarEmpresas", Empresa.listar)
routes.delete("/empresa/deletarEmpresa/:idEmpresa", Empresa.deletar)
routes.put("/empresa/editarEmpresa/:idEmpresa", Empresa.editar)

const Verificacao = require("./controllers/Empresa/VerificacaoController")

routes.post("/verificacao/cadastrarVerificacao/:tblEmpresaIdEmpresa", Verificacao.cadastro)
routes.get("/verificacao/listarVerificacoes", Verificacao.listar)
routes.put("/verificacao/responderVerificacao/:idVerificacao", Verificacao.responder)

//Rotas de Evento
const TipoEvento = require("./controllers/Evento/TipoEventoController")

routes.post("/tipoEvento/cadastrarTipoEvento", TipoEvento.cadastro)
routes.get("/tipoEvento/listarTipoEvento", TipoEvento.listar)
routes.delete("/tipoEvento/deletarTipoEvento/:idTipoEvento", TipoEvento.deletar)

const FaixaEtaria = require("./controllers/Evento/FaixaEtariaController")

routes.post("/faixaEtaria/cadastrarFaixaEtaria", FaixaEtaria.cadastro)
routes.get("/faixaEtaria/listarFaixaEtaria", FaixaEtaria.listar)
routes.delete("/faixaEtaria/deletarFaixaEtaria/:idFaixaEtaria", FaixaEtaria.deletar)

const Categoria = require("./controllers/Evento/CategoriaController")

routes.post("/categoria/cadastrarCategoria", Categoria.cadastro)
routes.get("/categoria/listarCategorias", Categoria.listar)
routes.delete("/categoria/deletarCategoria/:idCategoria", Categoria.deletar)

routes.get('/', (req, res) => {
    res.json({message: 'hello world'})
})

module.exports = routes