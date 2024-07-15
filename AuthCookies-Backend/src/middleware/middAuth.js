const jwt = require("jsonwebtoken");
const secret = require('../config/auth.json');

module.exports = (req,res,next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(200).json({
            error: true,
            massage: "Token não fornecido",
            status: '66',
            data: []
        });
    }

    //O JWT token é construido em 2 partes (Bearer hduhceoufvhweufhvufd)
    const parts = authHeader.split(" ");

    if(parts.length !== 2){
        return res.status(200).json({
            error: true,
            massage: "token invalido",
            status: '66',
            data: []
        });
    }

    const [scheme, token] = parts;

    if(scheme.indexOf("Bearer") !== 0){
        return res.status(200).json({
            error: true,
            massage: "Tipo do token invalido",
            status: '66',
            data: []
        });
    }

    jwt.verify(token, secret.secret, (err, decoded) => {

        if(err){
            return res.status(200).json({
                error:true,
                massage: "Token invalido / expirado",
                status: '66',
                data: []
            });
        }

        req.userLogged = decoded;

        return next();
    });

}