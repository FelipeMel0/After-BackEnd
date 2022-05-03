const db = require("../database/db")
const Evento = require("./Evento")

const EnderecoEvento = db.sequelize.define('tblEnderecoEvento', {
    idEnderecoEvento: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cep: {
        type: db.Sequelize.STRING(15),
        allowNull: true
    },
    logradouro: {
        type: db.Sequelize.STRING(100),
        allowNull: false
    },
    complemento: {
        type: db.Sequelize.STRING(50),
        allowNull: true
    },
    bairro: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    cidade: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    estado: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    numero: {
        type: db.Sequelize.STRING(20),
        allowNull: true
    }
})

Evento.hasMany(EnderecoEvento)

EnderecoEvento.belongsTo(Evento)

// EnderecoEvento.sync({
//     force: true
// }) 

module.exports = EnderecoEvento