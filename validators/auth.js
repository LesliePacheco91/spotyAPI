const {check} = require("express-validator");
const  validateResults = require("../utils/handleValidator")

const validatorRegisterUser = [

   check("name").exists().notEmpty().isLength({min:3, max:20}),
   check("age").exists().notEmpty().isNumeric({min:18, max:60}),
   check("email").exists().notEmpty().isEmail(),
   check("password").exists().notEmpty().isLength({min:6, max:15}),

    (req, res, next) =>{

        return validateResults(req, res, next);

    }

];

const validatorLoginUser = [
   
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min:6, max:15}),
 
     (req, res, next) =>{
 
         return validateResults(req, res, next);
 
     }
 
 ];

module.exports = {validatorRegisterUser, validatorLoginUser}