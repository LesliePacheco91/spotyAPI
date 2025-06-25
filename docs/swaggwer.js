const swaggerJsdoc = require("swagger-jsdoc");
/**
 * API config info
 */

const swaggerDefinition = {
    openapi:"3.0.0",
    info:{
        title:"Documentacion de spotiAPI curso nodeJS UDEMY",
        version:"1.0.0",
        contact:{
            email: "lesliepacheco62@gmail.com"
        }
          
    },
    servers:[
        {
            url: "http://localhost:3001/api"
        },
        {
            url: "http://localhost:3000/api"
        }
    ],
    components:{
        securitySchemes:{
           bearerAuth:{
            type:"http",
            scheme:"bearer"
           }
        },
        schemas:{
            authLogin: {
                type: "object",
                required: ["email", "password"],
                properties: {
                email: {type: "string"},
                password: {type: "string"},
                },
            },

            authRegister: {
                type: "object",
                required: ["email", "password", "age", "name"],
                    properties: {
                    name: {type: "string"},
                    age: {type: "integer"},
                    email: {type: "string"},
                    password: {type: "string"},
                },
            },

            track:{
                type:"object",
                required: ["name","albun","cover", "artist", "duration"],
                properties:{
                    name:{type:"string"},
                    albun:{type:"string"},
                    cover:{type:"string"}, 
                    artist:{
                        type: "object",
                        properties:{
                            name:{type:"string"},
                            nickname:{type:"string"},
                            nationality:{type:"string"},
                        }
                    },
                    duration:{
                        type: "object",
                        properties:{
                            start:{type: "integer"},
                            end:{type: "integer"},
                        }
                    },
                    mediaId:{type:"string"},
                },
            },
            storage:{
                 type:"object",
                required: ["url", "filename"],
                properties:{
                     url:{type:"string"},
                    filename:{type:"string"},
                }
               
            }

        },
    },
};
/**
 * options
 */

const  options  = {

    swaggerDefinition:swaggerDefinition,
    apis:[
        "./routes/*.js"
    ]
};
const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;