const {
  listarAlumnos_RP,
  guardarAlumno_RP,
  actualizarEdad_RP,
  eliminarAlumno_RP,
  buscarAlumnoPorID_RP,
} = require("../repositories/alumnos.repositoy");

const buscarAlumnoPorID_BL = async (id) => {
  const resultado = await buscarAlumnoPorID_RP(id);
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

const eliminarAlumno_BL = async (id) => {
  const resultado = await eliminarAlumno_RP(id);
  const data = {
    id: resultado._id,
    nombre: resultado.nombre,
    apellidoPaterno: resultado.apellido_paterno,
    apellidoMaterno: resultado.apellido_materno,
    edad: resultado.edad,
  };
  return data;
};

const listarAlumnos_BL = async () => {
  const resultado = await listarAlumnos_RP();

  const data = resultado.map((alumno) => {
    return {
      id: alumno._id,
      nombre: alumno.nombre,
      apellidoPaterno: alumno.apellido_paterno,
      apellidoMaterno: alumno.apellido_materno,
      edad: alumno.edad,
    };
  });

  return data;
};

const guardarAlumno_BL = async (alumno) => {
  const { apellidoPaterno, apellidoMaterno, estadoCivil } = alumno;

  const data = {
    ...alumno,
    apellido_paterno: apellidoPaterno,
    apellido_materno: apellidoMaterno,
    estado_civil: estadoCivil,
  };

  const resultado = await guardarAlumno_RP(data);

  return resultado;
};

module.exports = {
  listarAlumnos_BL,
  guardarAlumno_BL,
  actualizarEdad_BL,
  eliminarAlumno_BL,
  buscarAlumnoPorID_BL,
};
