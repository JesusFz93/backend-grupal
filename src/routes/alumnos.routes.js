const { Router } = require("express");

const {
  listarAlumnos_CT,
  guardarAlumno_CT,
  actualizarEdad_CT,
  eliminarAlumno_CT,
  buscarAlumnoPorID_CT,
} = require("../controllers/alumnos.controller");

const router = Router();

router.get("/:id", buscarAlumnoPorID_CT);

router.get("/", listarAlumnos_CT);

router.post("/", guardarAlumno_CT);

router.put("/:id", actualizarEdad_CT);

router.delete("/:id", eliminarAlumno_CT);

module.exports = router;
