const {
  listarMaterias_BL,
  guardarMateria_BL,
  actualizarNombre_BL,
  eliminarMateria_BL,
  buscarMateriaPorID_BL,
} = require("../bussiness-logic/materias.bl");

const resp = {
  ok: true,
  msg: "",
  data: [],
  errors: [],
};

const buscarMateriaPorID_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await buscarMateriaPorID_BL(id);
    resp.msg = "Materia obtenida";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al obtener materia";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const eliminarMateria_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await eliminarMateria_BL(id);
    resp.msg = "Materia eliminada";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al eliminar materia";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const actualizarNombre_CT = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    resp.data = await actualizarNombre_BL(id, nombre);
    resp.msg = "Materia actualizada";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al actualizar materia";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const listarMaterias_CT = async (req, res) => {
  resp.data = await listarMaterias_BL();
  resp.msg = "Listado de materias";
  return res.json(resp);
};

const guardarMateria_CT = async (req, res) => {
  try {
    const { ...body } = req.body;

    const materia = { ...body };

    let resultado = await guardarMateria_BL(materia);

    resp.data = resultado;
    resp.msg = "Materia registrada";
    return res.status(201).json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al registrar Materia";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

module.exports = {
  listarMaterias_CT,
  guardarMateria_CT,
  actualizarNombre_CT,
  eliminarMateria_CT,
  buscarMateriaPorID_CT,
};
