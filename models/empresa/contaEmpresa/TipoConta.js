const db = require("../../database/db")

const TipoConta = db.sequelize.define('tblTipoConta', {
    idTipoConta: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomeTipo: {
        type: db.Sequelize.STRING(20),
        allowNull: false
    }
    
})

// TipoConta.sync({
//     force: true
// })

module.exports = TipoConta