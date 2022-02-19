const { model, Schema } = require("mongoose");

const turnoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});

module.exports = model("turno", turnoSchema);
