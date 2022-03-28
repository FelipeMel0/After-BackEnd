const db = require("../database/db")

const Estado = db.sequelize.define('tblEstado', {

    idEstado: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    estadoSigla: {
        type: db.Sequelize.STRING(4),
        allowNull: false
    }

})

// Estado.sync({
//     force: true
// })

module.exports = Estado
