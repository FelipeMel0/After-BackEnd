const db = require("../database/db")

const Perfil = db.sequelize.define('tblPerfil', {
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


// Perfil.create({
//     nickname: "Selmolas" ,
//     email: "rebolma@email.com",
//     senha: "123",
//     imagemPerfil: "imgperfil.png",
//     imagemFundo: "imgfundo.jpeg"
// }) 

/*Exemplo de criação de perfil pelo próprio Node*/

//  Perfil.create({
//     nickname: "Clumsy Mouse" ,
//     email: "clumsy@mouse.com",
//     senha: "123",
//     imagemPerfil: "imgclumsy.png",
//     imagemFundo: "imgmouse.jpeg"
//  }) 


/*Exemplo de edição de dados*/

// Perfil.update(
//     { nickname: 'Selmolonolas' },
//     { where: { idPerfil: 1 } }
// )

module.exports = Perfil