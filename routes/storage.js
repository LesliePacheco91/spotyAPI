const express = require("express");
const router = express.Router();
const uploadMiddlewere = require("../utils/handleStorage");
const {getStorages, getStorage, createtStorage, deleteStorage} = require("../controllers/storage"); 
const {checkRol} = require("../middleware/rol");

const {validatorGetItemStorage} = require("../validators/storage");

/**
 * Router list storage
 * @openapi
 * /storage:
 *      get:
 *         tags:
 *             - storage 
 *         summary: "Lista de imagenes"
 *         description: Esta ruta obtiene la lista de archivos adjuntos
 *         security:
 *             - bearerAuth: []
 *         responses: 
 *              '200': 
 *                  description: Retorna lista de los achivos
 *                  content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/storage'
 *              '422':
 *                  description: Error de validación
 */
router.get("/", getStorages);

/**
 * Obtener una imagen espesifica
 * @openapi
 * /storage/{id}:
 *      get:
 *          tags:
 *              - storage
 *          summary: "Detalle storage"
 *          description: Muestra el detalle de uns storage
 *          security:
 *             - bearerAuth: []
 *          parameters:
 *              - name: id
 *                in: path
 *                description: ID de storage a retornar
 *                required: true
 *                schema: 
 *                    type: string
 *          responses:
 *                '200':
 *                    description: Retorna el objeto del storaje
 *                '422':
 *                    description: Error de validación
 *                '403':
 *                    description: no existe el registro
 */
router.get("/:id", validatorGetItemStorage, getStorage);

/**
 * Upload file
 * @openapi
 * /storage:
 *    post:
 *      tags:
 *        - storage
 *      summary: "Upload file"
 *      description: Subir un archivo
 *      security:
 *        - bearerAuth: []
 *      responses:
 *              '201':
 *                  description: Retorna el objeto insertado en la coleccion.
 *              '422':
 *                  description: Error de validacion.
 *      requestBody:
 *        content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               myfile:
 *                 type: string
 *                 format: binary
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado    en la coleccion con stado '201'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.post("/", uploadMiddlewere.single("myfile"), createtStorage);

/**
 * Delete storage
 * @openapi
 * /storage/{id}:
 *    delete:
 *      tags:
 *        - storage
 *      summary: "Eliminar storage solamente elimina si es admin"
 *      description: Elimiar el detalle de una storage
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
 *          description: Retorna el objecto de la storage.
 *        '422':
 *          description: Error de validacion.
 *        '403':
 *          description: No existe el registro que decea eliminar o no tiene permisos de admin.
 */
router.delete("/:id", validatorGetItemStorage, deleteStorage);

module.exports = router;
