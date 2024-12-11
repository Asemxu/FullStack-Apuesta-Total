const getDataAttribute = (element: HTMLElement, attributeName: string, type: string) => {
    if (!element || !attributeName || !type) {
        throw new Error('Todos los parámetros son requeridos');
    }
    const dataAttribute = element.getAttribute(`data-${attributeName}`);
    if (dataAttribute === null) {
        switch (type) {
            case 'boolean':
                return false;
            case 'string':
                return '';
            case 'number':
                return 0;
            default:
                throw new Error(`Tipo de conversión no soportado: ${type}`);
        }
    }

    switch (type) {
        case 'boolean':
            return dataAttribute.toLowerCase() === 'true';
        case 'string':
            return dataAttribute;
        case 'number':
            const numberValue = Number(dataAttribute);
            if (isNaN(numberValue)) {
                throw new Error(`El valor del atributo data-${attributeName} no se puede convertir a número`);
            }
            return numberValue;
        default:
            throw new Error(`Tipo de conversión no soportado: ${type}`);
    }
}

export default getDataAttribute
