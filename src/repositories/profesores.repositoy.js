const Profesor = require("../models/profesores.model");

const listarProfesores_RP = async () => {
  const resultado = await Profesor.find();
  return resultado;
};

const buscarProfesorPorID_RP = async (idProfesor) => {
  const profesorEncontrado = await Profesor.findById({ _id: idProfesor });
  return profesorEncontrado;
};

const buscarProfesorPorNombre_RP = async (nombreProfesor) => {
  return await Profesor.find({ nombre: nombreProfesor });
};

const guardarProfesor_RP = async (profesor) => {
  const nuevoProfesor = new Profesor(profesor);
  const resultado = nuevoProfesor.save();
  return resultado;
};

const actualizarEdad_RP = async (idProfesor, edadProfesor) => {
  const profesorActualizado = Profesor.findByIdAndUpdate(
    { _id: idProfesor },
    { edad: edadProfesor },
    { new: true } // para que regrese el objeto actualizado sino nos traera una fotografia del objeto antes de actualizar
  );

  return profesorActualizado;
};

const eliminarProfesor_RP = async (idProfesor) => {
  const profesorEliminado = Profesor.findByIdAndRemove({ _id: idProfesor });

  return profesorEliminado;
};

module.exports = {
  listarProfesores_RP,
  buscarProfesorPorID_RP,
  buscarProfesorPorNombre_RP,

  guardarProfesor_RP,
  actualizarEdad_RP,
  eliminarProfesor_RP,
};
