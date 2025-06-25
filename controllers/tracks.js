const {tracksModel} = require('../models');
const tracks = require('../models/noSQL/tracks');
const {matchedData} = require("express-validator");
const {handleHttpError} = require("../utils/handleError");

/**
 * Obtener lista de la bd
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) =>{

    try{

        const user = req.user;

        const data = await tracksModel.find();
        res.send({data, user});
    }catch(e){
        handleHttpError(res, 'ERRO_GET_ITEMS');
    }
};

/**
 * Obtener detalle de la bd
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) =>{

    try{

        const {id} = matchedData(req);
        const data = await tracksModel.findById(id);
        res.send({data});

    }catch(e){

        handleHttpError(res, "ERROR_GET_ITEM");
    }
};

/**
 * registrar registro de la bd
 * @param {*} req 
 * @param {*} res 
 */
const createtItems = async(req, res) =>{

    try{
        const body = matchedData(req)
        const data = await tracksModel.create(body);
        res.send({data});
    }catch(e){
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
    }

};

/**
 * actualizar registro de la bd
 * @param {*} req 
 * @param {*} res 
 */
const updateItems = async (req, res) =>{

    try{
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id, body);
        res.send({data});
    }catch(e){
        handleHttpError(res, 'ERROR_UPDATE_ITEMS');
    }
};
/**
 * Eliminar registro de la bd
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = async (req, res) =>{

    try{
        const {id} = matchedData(req);
        const data = await tracksModel.deleteOne({_id:id});
        res.send({data});

    }catch(e){
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
};
module.exports = {getItems, getItem, createtItems, updateItems, deleteItems}; 