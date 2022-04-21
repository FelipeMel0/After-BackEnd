const db = require("../../database/db")
const Compra = require("./Compra")
const VariedadeIngressoLote = require("./VariedadeIngressoLote")

const Ingresso = db.sequelize.define('tblIngresso', {
    idIngresso: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    qrCode: {
        type: db.Sequelize.TEXT,
        allowNull: true
    }
})

VariedadeIngressoLote.hasMany(Ingresso)

Ingresso.belongsTo(VariedadeIngressoLote)

Compra.hasMany(Ingresso)

Ingresso.belongsTo(Compra)

// Ingresso.sync({
//     force: true
// }) 

module.exports = Ingresso