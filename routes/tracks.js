const express = require('express');
const router = express.Router(); /// funcion de express para majenar rutas
const { getItems, getItem, createtItems, updateItems, deleteItems} = require('../controllers/tracks');
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const  customhader = require("../middleware/customHeader");
const {authMiddleware} = require ("../middleware/session");
const {checkRol} = require("../middleware/rol");
// se hace todo el crud

/**
 * Get all tracks
 * @openapi
 * /tracks:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "Listar canciones"
 *      description: Obten todas las listas de las canciones
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna la listas de las canciones.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/track'
 *        '422':
 *          description: Error de validacion.
 *        '401':
 *          description: Se requiere iniciar sesion.
 */
router.get('/',authMiddleware, getItems); // lista de items

/**
 * Get track
 * @openapi
 * /tracks/{id}:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "Detalle cancion"
 *      description: Obten el detalle de una cancion
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de canción a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la cancion.
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/track'
 *        '422':
 *          description: Error de validacion.
 */
router.get('/:id', authMiddleware, validatorGetItem, getItem); // detalle de un item

/**
 * Register new track
 * @openapi
 * /tracks:
 *    post:
 *      tags:
 *        - tracks
 *      summary: "Register track"
 *      description: Registra una cancion y obtener el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *        '403':
 *         description: No tiene permisos '403'
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.post('/', authMiddleware,  checkRol(["admin","user"]), validatorCreateItem, createtItems); // crear un item

/**
 * Update track
 * @openapi
 * /tracks/{id}:
 *    put:
 *      tags:
 *        - tracks
 *      summary: "Update track"
 *      description: Actualiza una cancion y obtener el detalle del registro
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de canción a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objeto actualizado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/track"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/track'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.put('/:id', authMiddleware, checkRol(["user"]), validatorCreateItem, updateItems); // Actualizar un item

/**
 * Delete track
 * @openapi
 * /tracks/{id}:
 *    delete:
 *      tags:
 *        - tracks
 *      summary: "Eliminar cancion"
 *      description: Elimiar el detalle de una cancion
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID de canción a retornar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objecto de la cancion.
 *        '422':
 *          description: Error de validacion.
 */
router.delete('/:id', authMiddleware, checkRol(["admin"]), validatorGetItem, deleteItems); // eliminar un item


module.exports = router