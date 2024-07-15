const mysql = require('mysql');
const db = require('../../../database');

const InfoUser = async (ID) => {

    return new Promise((resolve, reject) => {

        db.query("SELECT name, email, picture, category FROM users WHERE id_ = ?", [ID], (err, results, fields) => {

            if (err) {
                resolve({
                    error : true,
                    message : "Algo deu errado, tente novamente",
                    status: 500,
                    data: []
                });
                
            }else{
                if(!results){
                    resolve({
                        error : true,
                        message : "Usuario nao encontrado",
                        status: 200,
                        data: []
                    });
                }else{
                    resolve({
                        error : false,
                        message : "Usuario encontrado",
                        status: 200,
                        data: results
                    });
                }
            }
        });
    });
}

module.exports = InfoUser;