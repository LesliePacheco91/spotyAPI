const { handleHttpError } = require("../utils/handleError");
/**
 * trae el array con los roles permitidos
 * @param {*} rol 
 * @returns 
 */
const checkRol = (roles) => (req, res, next) =>{

    try{

        const { user } = req
        const rolesByUser = user.role;
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle)); // devuelve true o false

        if(!checkValueRol){
            handleHttpError(res,"USER_NOT_PERMISSION", 403);
        }

        next();

    }catch(e){
        //console.log(e);

        handleHttpError(res,"ERROR_PERMISSIONS", 403);
    }
    


}

module.exports = {checkRol}