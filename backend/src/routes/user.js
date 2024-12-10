const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();
const user = require('../controllers/user');
const { uploadSchema } = require('../schemas/user');
const { validateCSV } = require('../middlewares/validatecsv');
const { verifyToken } = require('../middlewares/verifytoken');

router.post('/upload', verifyToken  , upload.single('file') , validateCSV(uploadSchema)  , user.upload);
router.get('/totalRegisters', verifyToken  , user.totalRegisters);


  
module.exports = router;