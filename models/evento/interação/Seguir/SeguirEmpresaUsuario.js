const db = require("../../../database/db")
const Empresa = require("../../../empresa/Empresa")
const UsuarioComum = require("../../../usuarioComum/UsuarioComum")

const SeguirEmpresaUsuario = db.sequelize.define('tblSeguirEmpresaUsuario', {
    idSeguirEmpresaUsuario: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    
})

Empresa.hasMany(SeguirEmpresaUsuario)

SeguirEmpresaUsuario.belongsTo(Empresa)

UsuarioComum.hasMany(SeguirEmpresaUsuario)

SeguirEmpresaUsuario.belongsTo(UsuarioComum)

// SeguirEmpresaUsuario.sync({
//     force: true
// })

module.exports = SeguirEmpresaUsuario