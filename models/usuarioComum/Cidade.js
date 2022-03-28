const db = require("../database/db")

const Estado = require("./Estado")

const Cidade = db.sequelize.define('tblCidade', {

    idCidade: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomeCidade: {
        type: db.Sequelize.STRING(80),
        allowNull: false
    }

})

Estado.hasMany(Cidade)

Cidade.belongsTo(Estado)

// Cidade.sync({
//     force: true
// })

module.exports = Cidade