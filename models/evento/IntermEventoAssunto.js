const db = require("../database/db")
const Evento = require("./Evento")
const Assunto = require("./Assunto")

const IntermEventoAssunto = db.sequelize.define('tblIntermEventoAssunto', {
    idIntermEventoAssunto: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
    
})


Assunto.hasMany(IntermEventoAssunto)

IntermEventoAssunto.belongsTo(Assunto)

Evento.hasMany(IntermEventoAssunto)

IntermEventoAssunto.belongsTo(Evento)

// IntermEventoAssunto.sync({
//     force: true
// })

module.exports = IntermEventoAssunto