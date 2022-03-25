const {Router} = require('express')

const routes = new Router()

const PerfilController = require('./controllers/PerfilController')

routes.post('/perfil/cadastrarPerfil', PerfilController.cadastro)
routes.get('/perfil/listarPerfis', PerfilController.listar)
routes.delete('/perfil/deletarPerfil', PerfilController.deletar)
routes.put('/perfil/editarPerfil/:idPerfil', PerfilController.editar)

routes.get('/', (req, res) => {
    res.json({message: 'hello world'})
})

module.exports = routes