const db = require("../../database/db")
const Evento = require("../Evento")
const TipoIngresso = require("./TipoIngresso")

const Lote = db.sequelize.define('tblLote', {
    idLote: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    qtdeEstoque: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    maxCompraPorUsuario: {
        type: db.Sequelize.INTEGER,
        allowNull: true
    },
    dataInicio: {
        type: db.Sequelize.DATEONLY,
        allowNull: true
    },
    dataFim: {
        type: db.Sequelize.DATEONLY,
        allowNull: true
    },
    horaInicio: {
        type: db.Sequelize.TIME,
        allowNull: true
    },
    horaFim: {
        type: db.Sequelize.TIME,
        allowNull: true
    },
    taxaAbsorvida: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    }
})

TipoIngresso.hasMany(Lote)

Lote.belongsTo(TipoIngresso)

Evento.hasMany(Lote)

Lote.belongsTo(Evento)

// Lote.sync({
//     force: true
// }) 

module.exports = Lote