const db = require("../database/db")

const Perfil = require("../perfil/Perfil")

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
        type: db.Sequelize.DATEONLY,
        allowNull: false
    }
})

Perfil.hasMany(UsuarioComum)

UsuarioComum.belongsTo(Perfil)

// UsuarioComum.sync({
//     force: true
// })

module.exports = UsuarioComum