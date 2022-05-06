const db = require("../database/db")

const Perfil = require("../perfil/Perfil")

const Empresa = db.sequelize.define('tblEmpresa', {
    idEmpresa: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cnpj: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    }
    
})

Perfil.hasMany(Empresa)

Empresa.belongsTo(Perfil)

// Empresa.sync({
//         force: true
//     }) 
module.exports = Empresa