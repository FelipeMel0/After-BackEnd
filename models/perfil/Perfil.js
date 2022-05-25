const db = require("../database/db")

const Perfil = db.sequelize.define('tblPerfils', {
    idPerfil: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nickname: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    email: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    senha: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    },
    imagemPerfil: {
        type: db.Sequelize.STRING(700)
    },
    imagemFundo: {
        type: db.Sequelize.STRING(700)
    },
    biografia: {
        type: db.Sequelize.STRING(200)
    }

})

// Perfil.sync({
//     force: true
// }) 
    //Depois de executado, comentar essa linha. 
    //Caso contrário, irá criar várias tabelas iguais toda vez.

module.exports = Perfil