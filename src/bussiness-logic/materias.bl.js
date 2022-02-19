const {
  listarMaterias_RP,
  guardarMateria_RP,
  actualizarNombre_RP,
  eliminarMateria_RP,
  buscarMateriaPorID_RP,
} = require("../repositories/materias.repository");

const buscarMateriaPorID_BL = async (id) => {
  const resultado = await buscarMateriaPorID_RP(id);
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

const eliminarMateria_BL = async (id) => {
  const resultado = await eliminarMateria_RP(id);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
  };
  return data;
};

const listarMaterias_BL = async () => {
  const resultado = await listarMaterias_RP();

  const data = resultado.map((materia) => {
    return {
      id: materia._id,
      nombre: materia.nombre,
    };
  });

  return data;
};

const guardarMateria_BL = async (materia) => {
  const data = {
    ...materia,
  };

  const resultado = await guardarMateria_RP(data);

  return resultado;
};

module.exports = {
  listarMaterias_BL,
  guardarMateria_BL,
  actualizarNombre_BL,
  eliminarMateria_BL,
  buscarMateriaPorID_BL,
};
