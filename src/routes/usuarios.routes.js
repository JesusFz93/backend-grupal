const { Router } = require("express");
const {
  nuevoUsuario,
  signin,
  listarUsuarios_CT,
} = require("../controllers/usuarios.controller");
const { validateToken } = require("../middlewares/validate-token.middleware");

const router = Router();

router.post("/", validateToken, nuevoUsuario);
router.post("/signin", signin);
// router.get("/", listarUsuarios_CT);
router.get("/", validateToken, listarUsuarios_CT);

module.exports = router;
