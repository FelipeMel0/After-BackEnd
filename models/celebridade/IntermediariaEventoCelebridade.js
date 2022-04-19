const db = require("../database/db")
const Evento = require("../evento/Evento")
const Celebridade = require("./Celebridade")

const IntermEventoCelebridade = db.sequelize.define('tblIntermEventoCelebridade', {
    idIntermEventoCelebridade: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    
})


Celebridade.hasMany(IntermEventoCelebridade)

IntermEventoCelebridade.belongsTo(Celebridade)

Evento.hasMany(IntermEventoCelebridade)

IntermEventoCelebridade.belongsTo(Evento)

// IntermEventoCelebridade.sync({
//     force: true
// })

module.exports = IntermEventoCelebridade