const { handleHttpError } = require("../utils/handleError");
const {verifyToken} = require("../utils/handleJWT");
const {usersModel} = require("../models");

const authMiddleware = async (req, res, next) =>{
    try{

        if(!req.headers.authorization){
            handleHttpError(res,"YOU_NEED_SESION", 401);
        }

        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken._id){
            handleHttpError(res,"ERROR_ID_TOKEN", 401);
        }

        const user = await usersModel.findById(dataToken._id);
        req.user = user;

        next();

    }catch(e){

        handleHttpError(res,"NO_SESSION", 401);
    }
}

module.exports = {authMiddleware}