const Sequelize = require('sequelize')
const sequelize = new Sequelize('nomeDoBanco', 'root', 'senha', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")
}).catch(function (erro) {
    console.log("Falha ao se conectar: " + erro)
})

const Postagem = sequelize.define('tblPostagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.sync({
    force: true
}) //Depois de executado, comentar essa linha. 
   //Caso contrário, irá criar várias tabelas iguais toda vez.

Postagem.create({
    titulo: "Titulo Aleatório",
    conteudo: "Conteúdo aleatório da postagem aleatória" 
})