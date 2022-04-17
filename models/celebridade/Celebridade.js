const db = require("../database/db")
const VerificacaoUsuario = require("../usuarioComum/VerificacaoUsuario")
const TipoCelebridade = require("./TipoCelebridade")

const Celebridade = db.sequelize.define('tblCelebridade', {
    idCelebridade: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    
})


VerificacaoUsuario.hasMany(Celebridade)

Celebridade.belongsTo(VerificacaoUsuario)

TipoCelebridade.hasMany(Celebridade)

Celebridade.belongsTo(TipoCelebridade)

// Celebridade.sync({
//     force: true
// })

module.exports = Celebridade