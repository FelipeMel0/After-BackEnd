const db = require("../database/db")

const Categoria = db.sequelize.define('tblCategoria', {
    idCategoria: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomeCategoria: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    }
})

// Categoria.sync({
//     force: true
// }) 

module.exports = Categoria