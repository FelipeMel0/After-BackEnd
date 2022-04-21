const db = require("../../database/db")
const UsuarioComum = require("../../usuarioComum/UsuarioComum")

const Compra = db.sequelize.define('tblCompra', {
    idCompra: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    totalLiquido: {
        type: db.Sequelize.FLOAT,
        allowNull: true
    },
    totalBruto: {
        type: db.Sequelize.FLOAT,
        allowNull: true
    }
})

UsuarioComum.hasMany(Compra)

Compra.belongsTo(UsuarioComum)

// Compra.sync({
//     force: true
// }) 

module.exports = Compra