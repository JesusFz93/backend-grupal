const {
  listarAlumnos_BL,
  guardarAlumno_BL,
  actualizarEdad_BL,
  eliminarAlumno_BL,
  buscarAlumnoPorID_BL,
} = require("../bussiness-logic/alumnos.bl");

const resp = {
  ok: true,
  msg: "",
  data: [],
  errors: [],
};

const buscarAlumnoPorID_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await buscarAlumnoPorID_BL(id);
    resp.msg = "Alumno obtenido";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al obtener alumno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const eliminarAlumno_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await eliminarAlumno_BL(id);
    resp.msg = "Alumno eliminado";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al eliminar alumno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const actualizarEdad_CT = async (req, res) => {
  try {
    const { id } = req.params;
    const { edad } = req.body;

    resp.data = await actualizarEdad_BL(id, edad);
    resp.msg = "Alumno actualizado";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al actualizar alumno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const listarAlumnos_CT = async (req, res) => {
  resp.data = await listarAlumnos_BL();
  resp.msg = "Listado de alumnos";
  return res.json(resp);
};

const guardarAlumno_CT = async (req, res) => {
  try {
    const { ...body } = req.body;

    const alumno = { ...body };

    let resultado = await guardarAlumno_BL(alumno);

    resp.data = resultado;
    resp.msg = "Alumno registrado";
    return res.status(201).json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al guardar alumno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

module.exports = {
  listarAlumnos_CT,
  guardarAlumno_CT,
  actualizarEdad_CT,
  eliminarAlumno_CT,
  buscarAlumnoPorID_CT,
};
