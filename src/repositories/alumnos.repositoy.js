const Alumno = require("../models/alumnos.model");

const listarAlumnos_RP = async () => {
  const resultado = await Alumno.find();
  return resultado;
};

const buscarAlumnoPorID_RP = async (idAlumno) => {
  const alumnoEncontrado = await Alumno.findById({ _id: idAlumno });
  return alumnoEncontrado;
};

const buscarAlumnoPorNombre_RP = async (nombreAlumno) => {
  return await Alumno.find({ nombre: nombreAlumno });
};

const guardarAlumno_RP = async (alumno) => {
  const nuevoAlumno = new Alumno(alumno);
  const resultado = nuevoAlumno.save();
  return resultado;
};

const actualizarEdad_RP = async (idAlumno, edadAlumno) => {
  const alumnoActualizado = Alumno.findByIdAndUpdate(
    { _id: idAlumno },
    { edad: edadAlumno },
    { new: true } // para que regrese el objeto actualizado sino nos traera una fotografia del objeto antes de actualizar
  );

  return alumnoActualizado;
};

const eliminarAlumno_RP = async (idAlumno) => {
  const alumnoEliminado = Alumno.findByIdAndRemove({ _id: idAlumno });

  return alumnoEliminado;
};

module.exports = {
  listarAlumnos_RP,
  buscarAlumnoPorID_RP,
  buscarAlumnoPorNombre_RP,

  guardarAlumno_RP,
  actualizarEdad_RP,
  eliminarAlumno_RP,
};
