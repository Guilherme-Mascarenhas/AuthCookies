const express = require('express');
const validator = require('validator');
const AuthController = require('../auth/authController');
const MiddAuth = require('../../middleware/middAuth');
const NewUser = require('./function/newUser');
const DeleteUser = require('./function/deleteUser');
const UpdateUser = require('./function/updateUser');
const InfoUser = require('./function/infoUser');
const AllUsers = require('./function/allUsers');

const router = express.Router();

//Add new user
router.post('/newUser', async function(req, res){

    const name = req.body.name;
    const email = req.body.email;
    const categ = req.body.category;
    const pass = req.body.pass;

    if (!name || !email|| !categ || !pass){
        res.status(200).json({
            error: true,
            message: 'Preencha todas as informações necessarias',
            data: []
        });
        return
    }
    if (pass.length < 6){
        res.status(200).json({
            error: true,
            message: 'A senha deve ter 6 caracteres no minimo',
            data: []
        });
        return
    }
    if (!validator.isEmail(email)){
        res.status(200).json({
            error: true,
            message: 'Esse Email não é valido',
            data: []
        });
        return
    }

    const newuser = await NewUser(name,email,pass,categ);
    res.status(newuser.status).json({
        error: newuser.error,
        message: newuser.message,
        data: newuser.data
    });

});

//create a token
router.post('/authUser', async(req,res)=>{
    const {email, pass} = req.body;

    if(!email || !pass){
        res.status(200).json({
            error: true,
            message: 'Preencha todas as informações necessarias',
            data: []
        });
        return
    }
    const authController = await AuthController(email, pass);
    res.status(authController.status).json({
        error: authController.error,
        message: authController.message,
        data: authController.data
    });
});

//Delete user
router.post('/deleteUser',MiddAuth, async (req,res) => {
    const { ids } = req.body;
    if(!ids){
        res.status(200).json({
            error: true,
            message: 'Informe o Usuario',
            data: []
        });
        return
    }
    
    const DeleteId = await DeleteUser (ids);
    res.status(DeleteId.status).json({
        error: DeleteId.error,
        message: DeleteId.message,
        data: DeleteId.data
    }); 
});

//update user
router.post('/updatedUser',MiddAuth,async (req,res) => {
    
    const { id, name, email, category } = req.body;

    if (!name || !email|| !category || !id){
        res.status(200).json({
            error: true,
            message: 'Preencha todas as informações necessarias',
            data: []
        });
        return
    }
    const update_users = await UpdateUser(id, name, email,category);

    res.status(update_users.status).json({
        error: update_users.error,
        message: update_users.message,
        data: update_users.data
    });
});

//get info user
router.get('/infoUser/:id',MiddAuth, async (req,res) =>{

    const {id} = req.params;
    if(!id){
        res.status(200).json({
            error: true,
            message: 'Preencha todas as informações necessarias',
            data: []
        });
        return
    }

    const infoUser = await InfoUser(id);
    res.status(infoUser.status).json({
        error: infoUser.error,
        message: infoUser.message,
        data: infoUser.data
    });
});

//get info all user
router.get('/allUsers',MiddAuth, async (req,res) =>{

    const allUsers = await AllUsers();
    res.status(allUsers.status).json({
        error: allUsers.error,
        message: allUsers.message,
        data: allUsers.data
    });
});



module.exports = router;