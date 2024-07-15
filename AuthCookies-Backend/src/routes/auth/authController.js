const mysql = require('mysql');
const {sign} = require('jsonwebtoken');
const {compare} = require('bcryptjs');
const db = require ('../../database');
const secret = require('../../config/auth.json');

const AuthController = async (email, pass) => {

    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ? AND status = 1', [email], async (err, results, fields) => {

            if (err) {
                resolve({
                    error : true,
                    message : "Algo deu errado, tente novamente",
                    status: 500,
                    data: []
                });
            
            }else{
                if(results.length == 0){
                    resolve({
                        error : true,
                        message : 'E-mail não cadastrado',
                        status: 200,
                        data: []
                    }); 
                }else{
                    const user = results[0];
                    const isValid = await compare(pass, user.pass);
                    if(!isValid){
                        resolve({
                            error : true,
                            message : 'E-mail e/ou Senha Incorretos',
                            status: 200,
                            data: []
                        }); 
                    }else{
                        const tokenString = user.id_ + '/' + user.email;
                        const token = sign({decoded: tokenString},secret.secret, {expiresIn: '1d'});
                        resolve({
                            error : false,
                            message : 'Acesso Permitido',
                            status: 200,
                            data: [{
                                id: user.id_,
                                token: token,
                                name: user.name,
                                email: user.email,
                                pic : user.picture
                            }]
                        }); 

                    }

                }
            }
        })
    })
}

module.exports = AuthController