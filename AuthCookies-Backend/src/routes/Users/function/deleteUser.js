const mysql = require('mysql');
const db = require('../../../database');

const DeleteUser = async (IDs) => {

    let sql = '';
    let msgResult = '';
    if(Array.isArray(IDs)){

        sql = 'UPDATE users SET status = 0 WHERE id_ IN (?)';
        msgResult = 'Usuarios deletados com sucesso';

    }else{
        sql = 'UPDATE users SET status = 0 WHERE id_ = ?';
        msgResult = 'Usuario deletado com sucesso';
    }

    return new Promise((resolve, reject) => {

        db.query(sql, [IDs], (err, results, fields) => {
        const { affectedRows } = results;

            if (err) {
                resolve({
                    error : true,
                    message : "Algo deu errado, tente novamente",
                    status: 500,
                    data: []
                });
                
            }else{
                if(affectedRows == 0){
                    resolve({
                        error : true,
                        message : "Usuario nao encontrado",
                        status: 200,
                        data: []
                    });
                }else{
                    resolve({
                        error : false,
                        message : msgResult,
                        status: 200,
                        data: []
                    });
                }
            }
        });
    });

}

module.exports = DeleteUser;