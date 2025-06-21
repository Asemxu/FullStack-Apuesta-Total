const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();
const user = require('../controllers/user');
const { uploadSchema } = require('../schemas/user');
const { validateCSV } = require('../middlewares/validatecsv');

/**
 * @swagger
 * /v1/user/upload:
 *   post:
 *     summary: Subir archivo CSV de pokemons
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Archivo procesado correctamente
 *       400:
 *         description: Error de validación o formato de archivo incorrecto
 */
router.post('/upload', upload.single('file') , validateCSV(uploadSchema)  , user.upload);

/**
 * @swagger
 * /v1/user/totalRegisters:
 *   get:
 *     summary: Obtener el total de registros aceptados del usuario
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Total de registros aceptados
 *       401:
 *         description: No autorizado
 */
router.get('/totalRegisters' , user.totalRegisters);

module.exports = router;