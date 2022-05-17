const db = require("../../../database/db")
const Celebridade = require("../../../celebridade/Celebridade")
const Empresa = require("../../../empresa/Empresa")

const SeguirEmpresaCelebridade = db.sequelize.define('tblSeguirEmpresaCelebridade', {
    idSeguirEmpresaCelebridade: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    
})

Empresa.hasMany(SeguirEmpresaCelebridade)

SeguirEmpresaCelebridade.belongsTo(Empresa)

Celebridade.hasMany(SeguirEmpresaCelebridade)

SeguirEmpresaCelebridade.belongsTo(Celebridade)

// SeguirEmpresaCelebridade.sync({
//     force: true
// })

module.exports = SeguirEmpresaCelebridade