const db = require("./db")

const Perfil = require("./Perfil")

const UsuarioComum = db.sequelize.define('tblUsuarioComum', {
    idUsuarioComum: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    dataNasc: {
        type: db.Sequelize.DATE,
        allowNull: false
    }
})

Perfil.hasMany(UsuarioComum)

UsuarioComum.belongsTo(Perfil)

// UsuarioComum.sync({
//     force: true
// })

// UsuarioComum.create({
//     nome: "Selma Guimarães Rebotim",
//     dataNasc: '1955-09-06',
//     tblPerfilIdPerfil: '1'
// })


/* Exemplo de edição de dados */

//  UsuarioComum.update(
//     { nome: 'Selma Guimarães Rebotim Jr.' },
//     { where: { idUsuarioComum: 2 } }
//  )

module.exports = UsuarioComum