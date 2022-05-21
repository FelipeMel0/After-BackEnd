const jwt = require('jsonwebtoken');
const Perfil = require('../models/perfil/Perfil');

module.exports = {
    isLoggedIn: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(
                token,
                'SECRETKEY'
            );
            req.userData = decoded;

            console.log(decoded)

            var idPerfil = decoded.idPerfil

            var perfil = Perfil.findOne({
                where: {
                    idPerfil: idPerfil
                }
            })

            // console.log("AQUI ESTÁ: " + res.json(perfil.nickname))
            next();
            
        } catch (err) {
            return res.status(401).send({
                msg: 'Sua sessão não é válida!'
            });
        }
    }
}