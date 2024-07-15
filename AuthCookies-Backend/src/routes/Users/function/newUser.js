const mysql = require('mysql');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs');
const db = require('../../../database');

async function VeriEmail (email){
    return new Promise((resolve, reject) => {

        db.query('SELECT * FROM users WHERE email = ? AND status = 1', [email], (err, results, fields) => {

            if (err) {
                resolve({
                    error : true,
                    message : "Algo deu errado, tente novamente",
                    status: 500,
                    data: []
                });
            
            }else{

                if (results.length > 0) {
                    resolve({
                        error : true,
                        message : 'E-mail ja cadastrado',
                        status: 201,
                        data: []
                    });  
                } else {
                    resolve({
                        error : false,
                        message : '',
                        status: 200,
                        data: []
                    });
                }
            }
        } );
    });
}

async function newUser (name, email,pass,categ){

    const veriEmail = await VeriEmail(email);
    if(veriEmail.status != 200){
        return (veriEmail);
    }
    const hash = await bcryptjs.hash (pass,10);
    
    return new Promise((resolve, reject)=>{
        
        db.query("INSERT INTO users (id_, name, email, pass, category, status) VALUES (?,?,?,?,?,?)",[uuid.v4(),name,email,hash,categ, 1],(err, results, fields)=>{

            if (err) {
                resolve({
                    error : true,
                    message : 'Algo deu errado, tente novamente',
                    status: 500,
                    data: []
                });
                console.log(err);
                return;
                
            } else {

                resolve({
                    error : false,
                    message : 'Registrado com sucesso',
                    status: 200,
                    data : []
                });
            }
        });
    });
}

module.exports = newUser;