const db = require("../database/db")
const Categoria = require("./Categoria")

const Assunto = db.sequelize.define('tblAssunto', {
    idAssunto: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomeAssunto: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    }
})

Categoria.hasMany(Assunto)

Assunto.belongsTo(Categoria)

// Assunto.sync({
//     force: true
// }) 

module.exports = Assunto