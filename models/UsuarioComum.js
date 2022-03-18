const db = require("./db")

const UsuarioComum = db.Sequelize.define('tblUsuarioComum', {
    idUsuarioComum: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: db.Sequelize.STRING(45)
    },
    dataNasc: {
        type: db.Sequelize.DATE
    }
})

UsuarioComum.sync({
    force: true
})

module.exports = UsuarioComum