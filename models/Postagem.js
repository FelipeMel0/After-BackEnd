const db = require("./db")

const Postagem = db.sequelize.define('tblPostagem', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

Postagem.sync({
    force: true
}) //Depois de executado, comentar essa linha. 
   //Caso contrário, irá criar várias tabelas iguais toda vez.

Postagem.create({
    titulo: "Titulo Aleatório",
    conteudo: "Conteúdo aleatório da postagem aleatória" 
}) //Exemplo de criação de postagem pelo próprio Node

module.exports = Postagem