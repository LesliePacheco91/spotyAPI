const{ sequelize, Sequelize} = require("sequelize");
/*
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
const port = process.env.DB_PORT;*/

//const seque = new Sequelize( database, username,password,{
const seque = new Sequelize( 'cursonode', 'root','',{
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

const dbConectMysql = async() =>{

    try{

        await seque.authenticate();
        console.log("MYSQL Conexión correcta");

    }catch(e){
        console.log('MYSQL Error de conexion',e);
    }
};

module.exports = { seque, dbConectMysql }