const {
  listarProfesores_RP,
  buscarProfesorPorID_RP,
  guardarProfesor_RP,
  actualizarEdad_RP,
  eliminarProfesor_RP,
} = require("../repositories/profesores.repositoy");

const buscarProfesorPorID_BL = async (id) => {
  const resultado = await buscarProfesorPorID_RP(id);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
    apellidoPaterno: resultado.apellido_paterno,
    apellidoMaterno: resultado.apellido_materno,
    edad: resultado.edad,
  };
  return data;
};

const actualizarEdad_BL = async (id, edad) => {
  const resultado = await actualizarEdad_RP(id, edad);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
    apellidoPaterno: resultado.apellido_paterno,
    apellidoMaterno: resultado.apellido_materno,
    edad: resultado.edad,
  };
  return data;
};

const eliminarProfesor_BL = async (id) => {
  const resultado = await eliminarProfesor_RP(id);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
    apellidoPaterno: resultado.apellido_paterno,
    apellidoMaterno: resultado.apellido_materno,
    edad: resultado.edad,
  };
  return data;
};

const listarProfesores_BL = async () => {
  const resultado = await listarProfesores_RP();

  const data = resultado.map((profesor) => {
    return {
      id: profesor._id,
      nombre: profesor.nombre,
      apellidoPaterno: profesor.apellido_paterno,
      apellidoMaterno: profesor.apellido_materno,
      edad: profesor.edad,
    };
  });

  return data;
};

const guardarProfesor_BL = async (profesor) => {
  const { apellidoPaterno, apellidoMaterno, estadoCivil } = profesor;

  const data = {
    ...profesor,
    apellido_paterno: apellidoPaterno,
    apellido_materno: apellidoMaterno,
    estado_civil: estadoCivil,
  };

  const resultado = await guardarProfesor_RP(data);

  return resultado;
};

module.exports = {
  listarProfesores_BL,
  guardarProfesor_BL,
  actualizarEdad_BL,
  eliminarProfesor_BL,
  buscarProfesorPorID_BL,
};
