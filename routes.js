const {Router} = require('express')

const routes = new Router()

//Rotas de Perfil
const PerfilController = require('./controllers/PerfilController')

routes.post('/perfil/cadastrarPerfilUsuarioComum', PerfilController.cadastroUsuarioComum)
routes.post('/perfil/cadastrarPerfilUsuarioComumEndereco', PerfilController.cadastroUsuarioComumEndereco)
routes.post('/perfil/cadastrarPerfilEmpresa', PerfilController.cadastroEmpresa)
routes.get('/perfil/listarPerfis', PerfilController.listar)
routes.delete('/perfil/deletarPerfil/:idPerfil', PerfilController.deletar)
routes.put('/perfil/editarPerfil/:idPerfil', PerfilController.editar)
routes.put('/perfil/editarPerfilUsuarioComum/:idPerfil', PerfilController.editarPerfilUsuarioComum)
routes.get('/perfil/acharPerfil/:idPerfil', PerfilController.acharPorId)

//Rotas de Usuário Comum
const UsuarioComum = require('./controllers/UsuarioComum/UsuarioComumController')

routes.post("/usuarioComum/cadastrarUsuario/:tblPerfilIdPerfil", UsuarioComum.cadastro)
routes.get("/usuarioComum/listarUsuarios", UsuarioComum.listar)
routes.get("/usuarioComum/listarPerfilUsuarios", UsuarioComum.listarUsuarioComumPerfil)
routes.get("/usuarioComum/acharPerfilUsuario/:idUsuarioComum", UsuarioComum.listarUsuarioComumPerfilPorId)
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

routes.post("/endereco/cadastrarEndereco/:tblUsuarioComumIdUsuarioComum", Endereco.cadastro)
routes.get("/endereco/listarEnderecos", Endereco.listar)
routes.delete("/endereco/deletarEndereco/:idEndereco", Endereco.deletar)
routes.put("/endereco/editarEndereco/:idEndereco", Endereco.editar)

const VerificacaoUsuario = require("./controllers/UsuarioComum/VerificacaoUsuarioController")

routes.post("/verificacaoUsuario/cadastrarVerificacao/:tblUsuarioComumIdUsuarioComum", VerificacaoUsuario.cadastro)
routes.get("/verificacaoUsuario/listarVerificacoes", VerificacaoUsuario.listar)
routes.put("/verificacaoUsuario/responderVerificacao/:idVerificacaoUsuario", VerificacaoUsuario.responder)

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

const BancoConta = require("./controllers/Empresa/contaEmpresaController/BancoContaController")

routes.post("/bancoConta/cadastrarBancoConta", BancoConta.cadastro)
routes.get("/bancoConta/listarBancoConta", BancoConta.listar)
routes.delete("/bancoConta/deletarBancoConta/:idBancoConta", BancoConta.deletar)

const TipoConta = require("./controllers/Empresa/contaEmpresaController/TipoContaController")

routes.post("/tipoConta/cadastrarTipoConta", TipoConta.cadastro)
routes.get("/tipoConta/listarTiposConta", TipoConta.listar)
routes.delete("/tipoConta/deletarTipoConta/:idTipoConta", TipoConta.deletar)

const ContaEmpresa = require("./controllers/Empresa/contaEmpresaController/ContaEmpresaController")

routes.post("/contaEmpresa/cadastrarContaEmpresa/:tblEmpresaIdEmpresa/:tblTipoContumIdTipoConta/:tblBancoContumIdBancoConta", ContaEmpresa.cadastro)
routes.get("/contaEmpresa/listarContasEmpresa", ContaEmpresa.listar)
routes.delete("/contaEmpresa/deletarContaEmpresa/:idContaEmpresa", ContaEmpresa.deletar)
routes.post("/contaEmpresa/cadastrarContaCompleta/:tblEmpresaIdEmpresa", ContaEmpresa.cadastroCompleto)

//Rotas de Celebridade

const TipoCelebridade = require("./controllers/Celebridade/TipoCelebridadeController")

routes.post("/tipoCelebridade/cadastrarTipoCelebridade", TipoCelebridade.cadastro)
routes.get("/tipoCelebridade/listarTiposCelebridade", TipoCelebridade.listar)
routes.delete("/tipoCelebridade/deletarTipoCelebridade/:idTipoCelebridade", TipoCelebridade.deletar)

const Celebridade = require("./controllers/Celebridade/CelebridadeController")

routes.post("/celebridade/cadastrarCelebridade/:tblVerificacaoUsuarioIdVerificacaoUsuario/:tblTipoCelebridadeIdTipoCelebridade", Celebridade.cadastro)
routes.get("/celebridade/listarCelebridades", Celebridade.listar)
routes.delete("/celebridade/deletarCelebridade/:idCelebridade", Celebridade.deletar)

const IntermEventoCelebridade = require("./controllers/Celebridade/IntermEventoCelebridade")

routes.post("/intermEventoCelebridade/cadastrarIntermediaria/:tblCelebridadeIdCelebridade/:tblEventoIdEvento", IntermEventoCelebridade.cadastro)
routes.get("/intermEventoCelebridade/listarIntermediarias", IntermEventoCelebridade.listar)
routes.delete("/intermEventoCelebridade/deletarIntermediaria/:idIntermEventoCelebridade", IntermEventoCelebridade.deletar)

//Rotas de Evento

const Evento = require("./controllers/Evento/EventoController")

routes.post("/evento/cadastrarEvento/:tblEmpresaIdEmpresa", Evento.cadastro)
routes.get("/evento/listarEvento", Evento.listar)
routes.get("/evento/acharEventoPorId/:tblEmpresaIdEmpresa", Evento.acharPorId)
routes.get("/evento/acharEventoIdEvento/:idEvento", Evento.acharIdEvento)
routes.delete("/evento/deletarEvento/:idEvento", Evento.deletar)
routes.put("/evento/editarEvento/:idEvento", Evento.editar)
routes.post("/evento/cadastrarEventoEndereco/:tblEmpresaIdEmpresa", Evento.cadastroEndereco)

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

const EnderecoEvento = require("./controllers/Evento/EnderecoEventoController")

routes.post("/enderecoEvento/cadastrarEnderecoEvento/:tblEventoIdEvento", EnderecoEvento.cadastro)
routes.get("/enderecoEvento/listarEnderecoEvento", EnderecoEvento.listar)
routes.delete("/enderecoEvento/deletarEnderecoEvento/:idEnderecoEvento", EnderecoEvento.deletar)
routes.put("/enderecoEvento/editarEnderecoEvento/:idEnderecoEvento", EnderecoEvento.editar)

const Assunto = require("./controllers/Evento/AssuntoController")

routes.post("/assunto/cadastrarAssunto/:tblCategoriumIdCategoria", Assunto.cadastro)
routes.get("/assunto/listarAssuntos", Assunto.listar)
routes.get("/assunto/listarPorCategoria/:tblCategoriumIdCategoria", Assunto.listarPorCategoria)
routes.delete("/assunto/deletarAssunto/:idAssunto", Assunto.deletar)

const IntermEventoAssunto = require('./controllers/Evento/IntermEventoAssunto')

routes.post("/intermEventoAssunto/cadastrarIntermEventoAssunto/:tblAssuntoIdAssunto/:tblEventoIdEvento", IntermEventoAssunto.cadastro)
routes.get("/intermEventoAssunto/listarIntermediarias", IntermEventoAssunto.listar)
routes.delete("/intermEventoAssunto/deletarIntermediaria/:idIntermEventoAssunto", IntermEventoAssunto.deletar)

//Ingresso

const TipoIngresso = require("./controllers/Evento/Ingresso/TipoIngressoController")

routes.post("/tipoIngresso/cadastrarTipoIngresso", TipoIngresso.cadastro)
routes.get("/tipoIngresso/listarTipoIngresso", TipoIngresso.listar)
routes.delete("/tipoIngresso/deletarTipoIngresso/:idTipoIngresso", TipoIngresso.deletar)

const Lote = require("./controllers/Evento/Ingresso/LoteController")

routes.post("/lote/cadastrarLote/:tblEventoIdEvento", Lote.cadastro)
routes.get("/lote/listarLote", Lote.listar)
routes.delete("/lote/deletarLote/:idLote", Lote.deletar)
routes.put("/lote/editarLote/:idLote")

const VariedadeIngressoLote = require("./controllers/Evento/Ingresso/VariedadeIngressoLoteController")

routes.post("/variedadeIngresso/cadastrarVariedadeIngresso", VariedadeIngressoLote.cadastro)
routes.get("/variedadeIngresso/listarVariedadeIngresso", VariedadeIngressoLote.listar)
routes.delete("/variedadeIngresso/deletarVariedadeIngresso/:idVariedadeIngressoLote", VariedadeIngressoLote.deletar)
routes.put("/variedadeIngresso/editarVariedadeIngresso/:idVariedadeIngressoLote", VariedadeIngressoLote.editar)

const Compra = require("./controllers/Evento/Ingresso/CompraController")
routes.post("/compra/realizarCompra/:tblUsuarioComumIdUsuarioComum", Compra.cadastro)
routes.get("/compra/listarCompras", Compra.listar)
routes.get("/compra/acharComprasFeitas/:tblUsuarioComumIdUsuarioComum", Compra.acharPorId)

const Ingresso = require("./controllers/Evento/Ingresso/IngressoController")
routes.post("/ingresso/gerarIngresso/:tblVariedadeIngressoLoteIdVariedadeIngressoLote/:tblCompraIdCompra", Ingresso.cadastro)
routes.get("/ingresso/listarIngressosGerados", Ingresso.listar)
routes.get("/ingresso/acharIngressoPorCompra/:tblCompraIdCompra", Ingresso.acharPorId)

routes.get('/', (req, res) => {
    res.json({message: 'hello world'})
})

module.exports = routes