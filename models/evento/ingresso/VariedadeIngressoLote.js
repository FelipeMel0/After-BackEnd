const db = require("../../database/db")
const Lote = require("./Lote")

const VariedadeIngressoLote = db.sequelize.define('tblVariedadeIngressoLote', {
    idVariedadeIngressoLote: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quantidade: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.STRING(100),
        allowNull: true
    },
    tituloIngresso: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    valor: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
})

Lote.hasMany(VariedadeIngressoLote)

VariedadeIngressoLote.belongsTo(Lote)

// VariedadeIngressoLote.sync({
//     force: true
// }) 

module.exports = VariedadeIngressoLote