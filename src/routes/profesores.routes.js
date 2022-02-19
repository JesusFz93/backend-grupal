const { Router } = require("express");

const {
  listarProfesores_CT,
  buscarProfesorPorID_CT,
  guardarProfesor_CT,
  actualizarEdad_CT,
  eliminarProfesor_CT,
} = require("../controllers/profesores.controller");

const router = Router();

router.get("/", listarProfesores_CT);

router.get("/:id", buscarProfesorPorID_CT);

router.post("/", guardarProfesor_CT);

router.put("/:id", actualizarEdad_CT);

router.delete("/:id", eliminarProfesor_CT);

module.exports = router;
