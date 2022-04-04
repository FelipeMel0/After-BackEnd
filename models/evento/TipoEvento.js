const db = require("../database/db")

const TipoEvento = db.sequelize.define('tblTipoEvento', {
    idTipoEvento: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tipo: {
        type: db.Sequelize.TEXT,
        allowNull: false
    }
})

// TipoEvento.sync({
//     force: true
// }) 

module.exports = TipoEvento