const { Router } = require("express");

const {
  listarTurnos_CT,
  guardarTurno_CT,
  actualizarNombre_CT,
  eliminarTurno_CT,
  buscarTurnoPorID_CT,
} = require("../controllers/turnos.controller");

const router = Router();

router.get("/:id", buscarTurnoPorID_CT);

router.get("/", listarTurnos_CT);

router.post("/", guardarTurno_CT);

router.put("/:id", actualizarNombre_CT);

router.delete("/:id", eliminarTurno_CT);

module.exports = router;
