const db = require("../database/db")

const UsuarioComum = require("./UsuarioComum")

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
    },
    cidade: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    estado: {
        type: db.Sequelize.STRING(5),
        allowNull: false
    }

})

UsuarioComum.hasMany(Endereco)

Endereco.belongsTo(UsuarioComum)

// Endereco.sync({
//     force: true
// })

module.exports = Endereco