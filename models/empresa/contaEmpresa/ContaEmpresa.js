const db = require("../../database/db")
const Empresa = require("../Empresa")
const BancoConta = require("./BancoConta")
const TipoConta = require("./TipoConta")

const ContaEmpresa = db.sequelize.define('tblContaEmpresa', {
    idContaEmpresa: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    agencia: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    numeroConta: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    digito: {
        type: db.Sequelize.STRING(10),
        allowNull: false
    }
    
})

Empresa.hasMany(ContaEmpresa)

ContaEmpresa.belongsTo(Empresa)


TipoConta.hasMany(ContaEmpresa)

ContaEmpresa.belongsTo(TipoConta)


BancoConta.hasMany(ContaEmpresa)

ContaEmpresa.belongsTo(BancoConta)

// ContaEmpresa.sync({
//     force: true
// })

module.exports = ContaEmpresa