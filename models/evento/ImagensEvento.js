const db = require("../database/db")
const Evento = require("./Evento")

const ImagensEvento = db.sequelize.define('tblImagensEvento', {
    idImagensEvento: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    imagem: {
        type: db.Sequelize.TEXT,
        allowNull: true
    }
})

Evento.hasMany(ImagensEvento)

ImagensEvento.belongsTo(Evento)

// ImagensEvento.sync({
//     force: true
// }) 

module.exports = ImagensEvento