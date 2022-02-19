const {
  listarTurnos_RP,
  guardarTurno_RP,
  actualizarNombre_RP,
  eliminarTurno_RP,
  buscarTurnoPorID_RP,
} = require("../repositories/turnos.repositoy");

const buscarTurnoPorID_BL = async (id) => {
  const resultado = await buscarTurnoPorID_RP(id);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
  };
  return data;
};

const actualizarNombre_BL = async (id, nombre) => {
  const resultado = await actualizarNombre_RP(id, nombre);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
  };
  return data;
};

const eliminarTurno_BL = async (id) => {
  const resultado = await eliminarTurno_RP(id);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
  };
  return data;
};

const listarTurnos_BL = async () => {
  const resultado = await listarTurnos_RP();

  const data = resultado.map((turno) => {
    return {
      id: turno._id,
      nombre: turno.nombre,
    };
  });

  return data;
};

const guardarTurno_BL = async (turno) => {
  const data = {
    ...turno,
  };

  const resultado = await guardarTurno_RP(data);

  return resultado;
};

module.exports = {
  listarTurnos_BL,
  guardarTurno_BL,
  actualizarNombre_BL,
  eliminarTurno_BL,
  buscarTurnoPorID_BL,
};
