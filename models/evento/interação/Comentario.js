const db = require('../../database/db')
const Perfil = require('../../perfil/Perfil')
const Evento = require('../Evento')

const Comentario = db.sequelize.define('tblComentario', {
    idComentario: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    texto: {
        type: db.Sequelize.STRING(300),
        allowNull: false
    }
})

Perfil.hasMany(Comentario)

Comentario.belongsTo(Perfil)

Evento.hasMany(Comentario)

Comentario.belongsTo(Evento)

// Comentario.sync({
//     force: true
// }) 

module.exports = Comentario