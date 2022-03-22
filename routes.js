const {Router} = require('express')

const routes = new Router()

const PerfilController = require('./controllers/PerfilController')

routes.post('/perfil', PerfilController.cadastro)
routes.get('/perfil', PerfilController.index)
routes.delete('/perfil', PerfilController.deletar)

routes.get('/', (req, res) => {
    res.json({message: 'hello world'})
})

module.exports = routes