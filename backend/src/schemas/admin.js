const { z } = require('zod');

const acceptSchema = z.object({
  accept: z.boolean({ message: "Seleccione si acepto o rechazo" }),
  idregister : z.number().int().min(1, { message: "El valor debe ser un entero y al menos 1" }),
  iduser : z.string().min(1, { message: "Username del usuario" }),

});


module.exports = {
    acceptSchema
}