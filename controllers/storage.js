const fs = require("fs");
const {storageModel} = require('../models');
const {matchedData} = require("express-validator");
const {handleHttpError} = require("../utils/handleError");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
/**
 * Obtener lista de la bd
 * @param {*} req 
 * @param {*} res 
 */

const getStorages = async (req, res) =>{

    try{
        const data = await storageModel.find({});
        res.send({data});
    }catch(e){
        handleHttpError(res, 'ERROR_LIST_STORAGES');
    }
    
};

/**
 * Obtener detalle de la bd
 * @param {*} req 
 * @param {*} res 
 */
const getStorage = async (req, res) =>{
     try{
    
            const {id} = matchedData(req);
            const data = await storageModel.findById(id);
            res.send({data});
    
        }catch(e){
    
            handleHttpError(res, "ERROR_DETAIL_STORAGE");
        }
};

/**
 * registrar registro de la bd
 * @param {*} req 
 * @param {*} res 
 */
const createtStorage = async(req, res) =>{

    try{
        const { file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`,
          };

        console.log(fileData);
        const data = await storageModel.create(fileData);
        res.status(201);
        res.send({data});
        
    }catch(e){
        handleHttpError(res, "ERROR_REGISTER_STORAGE");
    }

};

/**
 * Eliminar registro de la bd
 * @param {*} req 
 * @param {*} res 
 */
const deleteStorage = async (req, res) =>{

    try{
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne({_id:id});
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`; //TODO c:/miproyecto/file-1232.png
        fs.unlinkSync(filePath);
        const data = {
            filePath,
            deleted:1
        }

        res.send({filePath});

    }catch(e){
        console.log(e);
        handleHttpError(res, "ERROR_DELETE_STORAGE");
    }
};

module.exports = {getStorages, getStorage, createtStorage, deleteStorage}; 