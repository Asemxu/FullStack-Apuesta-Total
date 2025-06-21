const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const { validate } = require('../middlewares/validate');
const { loginSchema , registerSchema } = require('../schemas/user');

/**
 * @swagger
 * /v1/auth:
 *   post:
 *     summary: Login de usuario
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       400:
 *         description: Error de validación
 */
router.post('/auth', validate(loginSchema) , auth.login);

/**
 * @swagger
 * /v1/register:
 *   post:
 *     summary: Registro de usuario
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               repassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registro exitoso
 *       400:
 *         description: Error de validación
 */
router.post('/register', validate(registerSchema) , auth.register);

module.exports = router;