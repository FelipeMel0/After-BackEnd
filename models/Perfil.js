const db = require("./db")
const UsuarioComum = require("./UsuarioComum")

const Perfil = db.sequelize.define('tblPerfil', {
    idPerfil: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    tblUsuarioComum_idUsuarioComum: {
        type: db.Sequelize.INTEGER,
        references: 'tblUsuarioComum', //Nome da tabela no banco
        referencesKey: 'idUsuarioComum' //Nome da coluna no banco
    }
})

UsuarioComum.hasMany(Perfil)

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