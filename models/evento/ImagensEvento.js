const db = require("../database/db")
const Evento = require("./Evento")

const ImagensFundo = db.sequelize.define('tblImagensEvento', {
    idImagensFundo: {
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

Evento.hasMany(ImagensFundo)

ImagensFundo.belongsTo(Evento)

// ImagensFundo.sync({
//     force: true
// }) 

module.exports = ImagensFundo