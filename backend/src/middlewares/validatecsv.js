const { parseCSVContent } = require('zod-csv')
const formatCSV = require('../utils/formatCSV')


const validateCSV = (schema) => (req, res, next) => {
    if (!req.file || req.file.mimetype !== 'text/csv') {
        return res.status(400).send('Por favor, sube un archivo .csv');
    }

    let csvContent = formatCSV(req.file)

    const result = parseCSVContent(csvContent, schema);
    if (result.errors) {
        return res.status(400).json({ errores: result.errors });
    }

    console.log(result.data)
    req.validatedData = result.data
    req.body = result.allRows
    next();
};

module.exports = {
    validateCSV
}