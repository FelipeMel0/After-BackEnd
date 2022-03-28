const db = require("./db")

const Perfil = require("./Perfil")

const Empresa = db.sequelize.define('tblEmpresa', {
    idEmpresa: {
        type: db.Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cnpj: {
        type: db.Sequelize.STRING(45),
        allowNull: false
    }
    
})

Perfil.hasMany(Empresa)

Empresa.belongsTo(Perfil)

// Empresa.sync({
//     force: true
// })

// Empresa.create({
//     cnpj: '22.219.009/0001-20',
//     tblPerfilIdPerfil: 2
// })


/*Exemplo de edição de dados */

// Empresa.update(
//     { cnpj: '98.902.856/0001-57' },
//     { where: { idEmpresa: 2 } }
//  )

module.exports = Empresa