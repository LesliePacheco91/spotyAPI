const {check} = require("express-validator");
const  validateResults = require("../utils/handleValidator")


const validatorGetItemStorage = [

    check("id").exists().notEmpty().isMongoId(),
     (req, res, next) =>{
 
         return validateResults(req, res, next);
 
     }
 
 ];

 module.exports = { validatorGetItemStorage}