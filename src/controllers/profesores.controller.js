const {
  listarProfesores_BL,
  guardarProfesor_BL,
  actualizarEdad_BL,
  eliminarProfesor_BL,
  buscarProfesorPorID_BL,
} = require("../bussiness-logic/profesores.bl");

const resp = {
  ok: true,
  msg: "",
  data: [],
  errors: [],
};

const buscarProfesorPorID_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await buscarProfesorPorID_BL(id);
    resp.msg = "Profesor obtenido";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al obtener profesor";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const eliminarProfesor_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await eliminarProfesor_BL(id);
    resp.msg = "Profesor eliminado";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al eliminar Profesor";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const actualizarEdad_CT = async (req, res) => {
  try {
    const { id } = req.params;
    const { edad } = req.body;

    resp.data = await actualizarEdad_BL(id, edad);
    resp.msg = "Profesor actualizado";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al actualizar Profesor";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const listarProfesores_CT = async (req, res) => {
  resp.data = await listarProfesores_BL();
  resp.msg = "Listado de profesores";
  return res.json(resp);
};

const guardarProfesor_CT = async (req, res) => {
  try {
    const { ...body } = req.body;

    const Profesor = { ...body };

    let resultado = await guardarProfesor_BL(Profesor);

    resp.data = resultado;
    resp.msg = "Profesor registrado";
    return res.status(201).json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al registrar Profesor";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

module.exports = {
  listarProfesores_CT,
  buscarProfesorPorID_CT,
  guardarProfesor_CT,
  actualizarEdad_CT,
  eliminarProfesor_CT,
};
