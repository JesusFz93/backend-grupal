const { Router } = require("express");

const {
  listarMaterias_CT,
  guardarMateria_CT,
  actualizarNombre_CT,
  eliminarMateria_CT,
  buscarMateriaPorID_CT,
} = require("../controllers/materias.controller");

const router = Router();

router.get("/:id", buscarMateriaPorID_CT);

router.get("/", listarMaterias_CT);

router.post("/", guardarMateria_CT);

router.put("/:id", actualizarNombre_CT);

router.delete("/:id", eliminarMateria_CT);

module.exports = router;
