const db = require("../database/db")

const FaixaEtaria = db.sequelize.define('tblFaixaEtaria', {
    idFaixaEtaria: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idade: {
        type: db.Sequelize.STRING(5),
        allowNull: false
    }
})

// FaixaEtaria.sync({
//     force: true
// }) 

module.exports = FaixaEtaria