const { matchedData } = require('express-validator');
const { encrypt, compare} = require("../utils/handlePassword");
const {tokenSign} = require("../utils/handleJWT");
const {usersModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
    const registerCtrl = async (req, res) => {

        try{
            req = matchedData(req);
            const passwordHash = await encrypt(req.password);
            const body = {...req, password: passwordHash}
            const dataUser = await usersModel.create(body);
            dataUser.set('password', undefined, {strict:false});// para no nomstrar pass al finalizar el registro

            const data = {
                token: await tokenSign(dataUser),
                user:dataUser
            }
            res.status(201);
            res.send({data});
        }catch(e){

            handleHttpError(res,"ERRO_REGISTER_USER");
        }

        
    }

 /**
  * 
  * @param {*} req 
  * @param {*} res 
  */
    const loginCtrl = async (req, res) =>{

        try{
            req = matchedData(req);

            const user = await usersModel.findOne({email:req.email}).select('password name role email');

            if(!user){
                handleHttpError(res,"USER_NOT_EXIST", 404);
                return
            }

            const hashPassword = user.get('password');
            const check = await compare(req.password, hashPassword);

            if(!check){
                handleHttpError(res,"PASSWORD_INVALID", 401);
                return
            }
            
            user.set('password', undefined, {strict:false})
            const data = {
                token: await tokenSign(user),
                user:user
            }


        res.send(data);

        }catch(e){
            handleHttpError(res,"ERROR_LOGIN_USER");
        }
    }



module.exports = {registerCtrl, loginCtrl}