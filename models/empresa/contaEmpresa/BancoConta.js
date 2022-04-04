const db = require("../../database/db")

const BancoConta = db.sequelize.define('tblBancoConta', {
    idBancoConta: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nomeBanco: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    }
    
})

// BancoConta.sync({
//     force: true
// })

module.exports = BancoConta