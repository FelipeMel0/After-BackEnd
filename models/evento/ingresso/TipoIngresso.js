const db = require("../../database/db")

const TipoIngresso = db.sequelize.define('tblTipoIngresso', {
    idTipoIngresso: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tipoIngresso: {
        type: db.Sequelize.STRING(15),
        allowNull: false
    }
})

// TipoIngresso.sync({
//     force: true
// }) 

module.exports = TipoIngresso