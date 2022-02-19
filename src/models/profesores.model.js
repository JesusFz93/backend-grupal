const { model, Schema } = require("mongoose");

const profesorSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido_paterno: {
    type: String,
    required: true,
  },
  apellido_materno: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
    default: 0,
  },
  sexo: {
    type: String,
    default: "",
  },
  direccion: {
    type: String,
    default: "",
  },
  estado_civil: {
    type: String,
    default: "soltero",
  },
});

module.exports = model("Profesore", profesorSchema);
