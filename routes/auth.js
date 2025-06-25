const express = require('express');
const router = express.Router(); /// funcion de express para majenar rutas
const {validatorRegisterUser, validatorLoginUser} = require("../validators/auth");
const {registerCtrl, loginCtrl} = require("../controllers/auth");


/**
 * Router register new user
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Registrar nuevo usuario"
 *          description: Esta ruta funciona para registrar un nuevo usuario
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: El usuario se registra de manera correcta
 *                  '403':
 *                      description: Error por validacion
 */
router.post('/register',validatorRegisterUser,registerCtrl);


/**
 * Router login user
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *              - auth
 *          summary: "Login del usuario"
 *          description: "Esta ruta funciona para logear usuarios registrados"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authLogin"
 *          responses:
 *                  '201':
 *                      description: El usuario se logeo correctamente
 *                  '422':
 *                      description: Error por validacion
 *                  '403':
 *                      description: No tiene permisos
 *                  '404':
 *                      description: El usuario no existe
 *                  '401':
 *                      description: Contraseña invalida
 */
router.post('/login', validatorLoginUser, loginCtrl)

module.exports = router