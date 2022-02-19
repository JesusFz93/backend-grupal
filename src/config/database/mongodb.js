const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);

    console.log("Conectado a la db");
  } catch (e) {
    console.log("error de conexion");
    console.log(e);
    throw new Error("Error al conectar a la base de datos");
  }
};

module.exports = dbConnection;
