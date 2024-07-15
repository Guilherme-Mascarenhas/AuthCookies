const mysql = require('mysql');
const db = require('../../../database');

const UpdatedUser = async (id, name, email,category) => {
    
    return new Promise ((resolve, reject) => {

        db.query("UPDATE users SET name = ?, email = ?, category = ? WHERE id_ = ?",
        [name, email, category,id],(err, results, fields) => {

            if (err) {
                resolve({
                    error : true,
                    message : 'Algo deu errado, tente novamente',
                    status: 500,
                    data: []
                });
                return;
                
            } else {
                const { affectedRows } = results;
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
                        message : "Usuario atualizado com sucesso",
                        status: 200,
                        data: []
                    });
                }
            }
        });
    });
}

module.exports = UpdatedUser;