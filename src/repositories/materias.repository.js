const Materia = require("../models/materias.model");

const listarMaterias_RP = async () => {
  const resultado = await Materia.find();
  return resultado;
};

const buscarMateriaPorID_RP = async (idMateria) => {
  const MateriaEncontrada = await Materia.findById({ _id: idMateria });
  return MateriaEncontrada;
};

const buscarMateriaPorNombre_RP = async (nombreMateria) => {
  return await Materia.find({ nombre: nombreMateria });
};

const guardarMateria_RP = async (materia) => {
  const nuevaMateria = new Materia(materia);
  const resultado = nuevaMateria.save();
  return resultado;
};

const actualizarNombre_RP = async (idMateria, nombreMateria) => {
  const MateriaActualizada = Materia.findByIdAndUpdate(
    { _id: idMateria },
    { nombre: nombreMateria },
    { new: true }
  );

  return MateriaActualizada;
};

const eliminarMateria_RP = async (idMateria) => {
  const MateriaEliminada = Materia.findByIdAndRemove({ _id: idMateria });

  return MateriaEliminada;
};

module.exports = {
  listarMaterias_RP,
  buscarMateriaPorID_RP,
  buscarMateriaPorNombre_RP,

  guardarMateria_RP,
  actualizarNombre_RP,
  eliminarMateria_RP,
};
