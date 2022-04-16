const db = require("../database/db")

const TipoCelebridade = db.sequelize.define('tblTipoCelebridade', {
    idTipoCelebridade: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tipo: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    }
    
})

// TipoCelebridade.sync({
//     force: true
// })

module.exports = TipoCelebridade