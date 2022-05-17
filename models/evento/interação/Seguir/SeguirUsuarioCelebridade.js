const db = require("../../../database/db")
const Celebridade = require("../../../celebridade/Celebridade")
const UsuarioComum = require("../../../usuarioComum/UsuarioComum")

const SeguirUsuarioCelebridade = db.sequelize.define('tblSeguirUsuarioCelebridade', {
    idSeguirUsuarioCelebridade: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    
})

Celebridade.hasMany(SeguirUsuarioCelebridade)

SeguirUsuarioCelebridade.belongsTo(Celebridade)

UsuarioComum.hasMany(SeguirUsuarioCelebridade)

SeguirUsuarioCelebridade.belongsTo(UsuarioComum)

// SeguirUsuarioCelebridade.sync({
//     force: true
// })

module.exports = SeguirUsuarioCelebridade