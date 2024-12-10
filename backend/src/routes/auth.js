const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');
const { validate } = require('../middlewares/validate');
const { loginSchema , registerSchema } = require('../schemas/user');

router.post('/auth', validate(loginSchema) , auth.login);
router.post('/register', validate(registerSchema) , auth.register);


  
module.exports = router;