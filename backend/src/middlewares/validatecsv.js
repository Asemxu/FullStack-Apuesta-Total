const { parseCSVContent } = require('zod-csv')
const formatCSV = require('../utils/formatCSV')


const validateCSV = (schema) => (req, res, next) => {
    if (!req.file || req.file.mimetype !== 'text/csv' || req.file.size > 1024 * 1024) {
        return res.status(400).send('Por favor, sube un archivo .csv de máximo 1MB');
    }

    let csvContent = formatCSV(req.file)

    const result = parseCSVContent(csvContent, schema);
    if (result.errors) {
        return res.status(400).json({ errores: result.errors });
    }

    req.validatedData = result.data
    req.body = result.allRows
    next();
};

module.exports = {
    validateCSV
}