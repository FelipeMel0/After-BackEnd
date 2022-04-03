const db = require("../database/db")

const UsuarioComum = require("./UsuarioComum")
const Cidade = require("./Cidade")

const Endereco = db.sequelize.define('tblEndereco', {

    idEndereco: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cep: {
        type: db.Sequelize.STRING(15),
        allowNull: true
    } 

})

UsuarioComum.hasMany(Endereco)

Endereco.belongsTo(UsuarioComum)

Cidade.hasMany(Endereco)

Endereco.belongsTo(Cidade)

// Endereco.sync({
//     force: true
// })

module.exports = Endereco