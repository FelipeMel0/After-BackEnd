const db = require("../database/db")
const ContaEmpresa = require("../empresa/contaEmpresa/ContaEmpresa")
const Empresa = require("../empresa/Empresa")
const Categoria = require("./Categoria")
const FaixaEtaria = require("./FaixaEtaria")
const TipoEvento = require("./TipoEvento")

const Evento = db.sequelize.define('tblEvento', {
    idEvento: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: db.Sequelize.STRING(50),
        allowNull: false
    },
    descricao: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },
    capa: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    dataInicio: {
        type: db.Sequelize.DATEONLY,
        allowNull: false
    },
    dataFim:{
        type: db.Sequelize.DATEONLY,
        allowNull: true
    },
    horaInicio: {
        type: db.Sequelize.TIME,
        allowNull: false
    },
    horaFim: {
        type: db.Sequelize.TIME,
        allowNull: true
    },
    taxaAbsorvida:{
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    }
})

Empresa.hasMany(Evento)

Evento.belongsTo(Empresa)


FaixaEtaria.hasMany(Evento)

Evento.belongsTo(FaixaEtaria)


TipoEvento.hasMany(Evento)

Evento.belongsTo(TipoEvento)


Categoria.hasMany(Evento)

Evento.belongsTo(Categoria)


ContaEmpresa.hasMany(Evento)

Evento.belongsTo(ContaEmpresa)

// Evento.sync({
//     force: true
// }) 

module.exports = Evento