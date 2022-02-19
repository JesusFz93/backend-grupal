const Turno = require("../models/turnos.model");

const listarTurnos_RP = async () => {
  const resultado = await Turno.find();
  return resultado;
};

const buscarTurnoPorID_RP = async (idTurno) => {
  const TurnoEncontrado = await Turno.findById({ _id: idTurno });
  return TurnoEncontrado;
};

const buscarTurnoPorNombre_RP = async (nombreTurno) => {
  return await Turno.find({ nombre: nombreTurno });
};

const guardarTurno_RP = async (turno) => {
  const nuevoTurno = new Turno(turno);
  const resultado = nuevoTurno.save();
  return resultado;
};

const actualizarNombre_RP = async (idTurno, nombreTurno) => {
  const TurnoActualizado = Turno.findByIdAndUpdate(
    { _id: idTurno },
    { nombre: nombreTurno },
    { new: true } // para que regrese el objeto actualizado sino nos traera una fotografia del objeto antes de actualizar
  );

  return TurnoActualizado;
};

const eliminarTurno_RP = async (idTurno) => {
  const TurnoEliminado = Turno.findByIdAndRemove({ _id: idTurno });

  return TurnoEliminado;
};

module.exports = {
  listarTurnos_RP,
  buscarTurnoPorID_RP,
  buscarTurnoPorNombre_RP,

  guardarTurno_RP,
  actualizarNombre_RP,
  eliminarTurno_RP,
};
