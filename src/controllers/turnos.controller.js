const {
  listarTurnos_BL,
  guardarTurno_BL,
  actualizarNombre_BL,
  eliminarTurno_BL,
  buscarTurnoPorID_BL,
} = require("../bussiness-logic/turnos.bl");

const resp = {
  ok: true,
  msg: "",
  data: [],
  errors: [],
};

const buscarTurnoPorID_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await buscarTurnoPorID_BL(id);
    resp.msg = "Turno obtenido";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al obtener turno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const eliminarTurno_CT = async (req, res) => {
  try {
    const { id } = req.params;

    resp.data = await eliminarTurno_BL(id);
    resp.msg = "Turno eliminado";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al eliminar turno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const actualizarNombre_CT = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    resp.data = await actualizarNombre_BL(id, nombre);
    resp.msg = "Turno actualizado";
    return res.json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al actualizar turno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const listarTurnos_CT = async (req, res) => {
  resp.data = await listarTurnos_BL();
  resp.msg = "Listado de turnos";
  return res.json(resp);
};

const guardarTurno_CT = async (req, res) => {
  try {
    const { ...body } = req.body;

    const turno = { ...body };

    let resultado = await guardarTurno_BL(turno);

    resp.data = resultado;
    resp.msg = "Turno registrado";
    return res.status(201).json(resp);
  } catch (e) {
    console.log();
    resp.ok = false;
    resp.msg = "Error al registrar Turno";
    resp.data = [];
    return res.status(500).json(resp);
  }
};

module.exports = {
  listarTurnos_CT,
  guardarTurno_CT,
  actualizarNombre_CT,
  eliminarTurno_CT,
  buscarTurnoPorID_CT,
};
