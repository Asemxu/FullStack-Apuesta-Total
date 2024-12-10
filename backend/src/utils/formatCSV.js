const formatCSV = (file) => {
    let data = file.buffer.toString('utf-8').toLowerCase().replaceAll(';', ',').split('\n');
    if (data[data.length - 1].trim() === '') {
        data = data.slice(0, -1); // Eliminar la última línea vacía
    }

    return data.join('\n')
}


module.exports = formatCSV
