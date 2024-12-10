const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');
const { validate } = require('../middlewares/validate');
const { acceptSchema } = require('../schemas/admin')

router.get('/list' , admin.list);
router.get('/listHistory' , admin.listHistory);
router.post('/accept' , validate(acceptSchema) , admin.accept);



  
module.exports = router;