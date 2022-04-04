const db = require("../database/db")

const Empresa = require("./Empresa")

const Verificacao = db.sequelize.define('tblVerificacaoEmpresa', {
    idVerificacao: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    status: {
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    dataHoraSolicitacao: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    arquivoDoc: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    justificativaSolicitacao: {
        type: db.Sequelize.TEXT,
        allowNull: false
    },
    dataHoraResposta: {
        type: db.Sequelize.DATE,
        allowNull: true
    },
    justificativaResposta: {
        type: db.Sequelize.TEXT,
        allowNull: true
    }
    
})

Empresa.hasMany(Verificacao)

Verificacao.belongsTo(Empresa)

// Verificacao.sync({
//     force: true
// })

module.exports = Verificacao