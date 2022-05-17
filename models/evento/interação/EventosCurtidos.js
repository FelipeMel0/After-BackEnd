const db = require('../../database/db')
const Perfil = require('../../perfil/Perfil')
const Evento = require('../../evento/Evento')

const EventosCurtidos = db.sequelize.define('tblEventosCurtidos', {
    idEventosCurtidos: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})

Perfil.hasMany(EventosCurtidos)

EventosCurtidos.belongsTo(Perfil)

Evento.hasMany(EventosCurtidos)

EventosCurtidos.belongsTo(Evento)

// EventosCurtidos.sync({
//     force: true
// }) 

module.exports = EventosCurtidos