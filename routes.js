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
const UsuarioComum = require('./controllers/UsuarioComumController')

routes.post("/usuarioComum/cadastrarUsuario/:tblPerfilIdPerfil", UsuarioComum.cadastro)

routes.get('/', (req, res) => {
    res.json({message: 'hello world'})
})

module.exports = routes