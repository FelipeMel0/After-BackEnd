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
        type: db.Sequelize.TEXT
    },
    imagemFundo: {
        type: db.Sequelize.TEXT
    }

})


// Perfil.sync({
//     force: true
// }) 
    //Depois de executado, comentar essa linha. 
    //Caso contrário, irá criar várias tabelas iguais toda vez.

module.exports = Perfil