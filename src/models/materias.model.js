const { model, Schema } = require("mongoose");

const materiaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});

module.exports = model("materia", materiaSchema);
