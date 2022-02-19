require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnection = require("./config/database/mongodb");
const alumnosRouter = require("./routes/alumnos.routes");
const profesoresRouter = require("./routes/profesores.routes");
const turnosRouter = require("./routes/turnos.routes");
const materiasRouter = require("./routes/materias.routes");
const usuariosRouter = require("./routes/usuarios.routes");

dbConnection();

app.use(cors());
app.use(express.json());

app.use("/api/alumnos", alumnosRouter);
app.use("/api/profesores", profesoresRouter);
app.use("/api/turnos", turnosRouter);
app.use("/api/materias", materiasRouter);
app.use("/api/usuarios", usuariosRouter);

app.listen(process.env.PORT || "6001", () => {
  console.log(`Server is running on port ${process.env.PORT || "6001"}`);
});
