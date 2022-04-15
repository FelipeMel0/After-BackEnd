const db = require("../database/db")

const UsuarioComum = require("./UsuarioComum")

const VerificacaoUsuario = db.sequelize.define('tblVerificacaoUsuario', {
    idVerificacaoUsuario: {
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
    nomeCompleto: {
        type: db.Sequelize.STRING(80),
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

UsuarioComum.hasMany(VerificacaoUsuario)

VerificacaoUsuario.belongsTo(UsuarioComum)

// VerificacaoUsuario.sync({
//     force: true
// })

module.exports = VerificacaoUsuario