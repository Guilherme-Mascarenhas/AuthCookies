const mysql = require('mysql');
const db = require('../../../database');

const AllUsers = async () => {

    return new Promise((resolve, reject) => {

        db.query("SELECT id_, name, email, picture, category FROM users WHERE status = 1", (err, results, fields) => {

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
                        message : "Usuarios encontrados",
                        status: 200,
                        data: results
                    });
                }
            }
        });
    });
}

module.exports = AllUsers;