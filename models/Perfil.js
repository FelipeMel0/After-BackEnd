const db = require("./db")

const Perfil = db.sequelize.define('tblPerfil', {
    nome: {
        type: db.Sequelize.STRING(45)
    },
    nickname: {
        type: db.Sequelize.STRING(45)
    },
    email: {
        type: db.Sequelize.STRING(45)
    },
    senha: {
        type: db.Sequelize.STRING(45)
    },
    imagemPerfil: {
        type: db.Sequelize.STRING(45)
    },
    imagemFundo: {
        type: db.Sequelize.STRING(45)
    },
    verificacao: {
        type: db.Sequelize.BOOLEAN
    }
})

Perfil.sync({
    force: true
}) //Depois de executado, comentar essa linha. 
   //Caso contrário, irá criar várias tabelas iguais toda vez.

Perfil.create({
    nome: "Selma Rebotim",
    nickname: "Selmolas" ,
    email: "rebolma@email.com",
    senha: "123",
    imagemPerfil: "imgperfil.png",
    imagemFundo: "imgfundo.jpeg",
    verificacao: false
}) //Exemplo de criação de postagem pelo próprio Node

module.exports = Perfil