const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');
const { validate } = require('../middlewares/validate');
const { acceptSchema } = require('../schemas/admin')

/**
 * @swagger
 * /v1/admin/list:
 *   get:
 *     summary: Listar solicitudes pendientes
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de solicitudes pendientes
 *       401:
 *         description: No autorizado
 */
router.get('/list' , admin.list);

/**
 * @swagger
 * /v1/admin/listHistory:
 *   get:
 *     summary: Listar historial de solicitudes aceptadas/rechazadas
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de historial de solicitudes
 *       401:
 *         description: No autorizado
 */
router.get('/listHistory' , admin.listHistory);

/**
 * @swagger
 * /v1/admin/accept:
 *   post:
 *     summary: Aceptar o rechazar una solicitud
 *     tags:
 *       - Admin
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               accept:
 *                 type: boolean
 *               idregister:
 *                 type: integer
 *               iduser:
 *                 type: string
 *     responses:
 *       200:
 *         description: Solicitud procesada correctamente
 *       400:
 *         description: Error de validación
 *       401:
 *         description: No autorizado
 */
router.post('/accept' , validate(acceptSchema) , admin.accept);

module.exports = router;