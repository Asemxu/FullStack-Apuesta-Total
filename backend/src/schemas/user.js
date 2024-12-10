const { z } = require('zod')
const { zcsv } = require('zod-csv');

const loginSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es obligatorio"),
  password: z.string().min(1, "La contraseña de usuario es obligatorio"),
});

const registerSchema = z.object({
  username: z.string().min(1, "El nombre de usuario es obligatorio"),
  password: z.string().min(1, "La contraseña es obligatoria"),
  repassword: z.string().min(1, "La confirmación de la contraseña es obligatoria")
}).refine(data => data.password === data.repassword, {
  message: "Las contraseñas no coinciden",
  path: ["repassword"]
});


const uploadSchema = z.object({
  pokemon_id: zcsv.string(z.string().min(1)),
  pokemon_name: zcsv.string(z.string().min(1)),
  pokemon_power: zcsv.string(z.string().min(1)),
});


module.exports = {
  registerSchema,
  loginSchema,
  uploadSchema
}