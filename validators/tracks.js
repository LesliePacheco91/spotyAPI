const {check} = require("express-validator");
const  validateResults = require("../utils/handleValidator")

const validatorCreateItem = [

    // verifica si existe, que no sea vacio y que tenga minimo 5 y maximo 20 caracteres
   //check("name").exists().notEmpty().isLength({min:5, max:20}),
   check("name").exists().notEmpty(),
   check("albun").exists().notEmpty(),
   check("cover").exists().notEmpty(),
   check("artist").exists().notEmpty(),
   check("artist.name").exists().notEmpty(),
   check("artist.nickname").exists().notEmpty(),
   check("artist.nationality").exists().notEmpty(),
   check("duration").exists().notEmpty(),
   check("duration.start").exists().notEmpty(),
   check("duration.end").exists().notEmpty(),
   check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) =>{

        return validateResults(req, res, next);

    }

];

const validatorGetItem = [

   check("id").exists().notEmpty().isMongoId(),
    (req, res, next) =>{

        return validateResults(req, res, next);

    }

];

module.exports = {validatorCreateItem, validatorGetItem}