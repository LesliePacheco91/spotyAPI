require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerUI = require("swagger-ui-express");
const openApiConfiguration  = require('./docs/swaggwer');
const dbConnectNosql = require('./config/mongo');
const { config } = require("dotenv");
const {dbConectMysql} = require("./config/mysql")
app.use(express.json()); // para enviar datos mediante json en postman

const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';

const port = process.env.PORT || 3000;

/**
 * definir ruta de documentacion
 */
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfiguration));
   
//se invican las rutas
app.use("/api",require("./routes"))


if(NODE_ENV !== 'test'){
    app.listen(port);
    console.log("estas en ambiente de desarrollo", port);
}



(ENGINE_DB === 'nosql')? dbConnectNosql() : dbConectMysql();

module.exports = app