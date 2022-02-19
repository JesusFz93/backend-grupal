const {
  altaUsuario,
  buscarUsuarioDB,
  listarUsuariosActivos,
  listarUsuarios_BL,
  obtenerUsusarioPorNombreBL,
} = require("../bussiness-logic/usuarios.bl");
const { comparePassword } = require("../helpers/password.utils");
const { generateToken } = require("../helpers/jwt.utils");

const resp = {
  ok: true,
  msg: "",
  data: [],
  errors: [],
};

const nuevoUsuario = async (req, res) => {
  try {
    const { nombre, username, email, password } = req.body;
    const dtoUsuario = { nombre, username, email, password };

    const Userdb = await obtenerUsusarioPorNombreBL(username);

    if (Userdb) {
      return res.status(400).json({
        ...resp,
        ok: false,
        data: [],
        msg: `El usuaio ${Userdb.username}, ya existe`,
      });
    }

    resp.data = await altaUsuario(dtoUsuario);

    return res.status(201).json(resp);
  } catch (error) {
    console.log(error);
    resp.messages = "Lo sentimos, hubo un error";
    resp.success = false;
    resp.data = [];
    return res.status(500).json(resp);
  }
};

const signin = async (req, res) => {
  var response = "";
  try {
    const { username, password } = req.body;

    const findUser = await buscarUsuarioDB(username);
    if (!findUser) {
      (response.messages = "Usuario no encontrado"), (response.success = false);
      response.data = [];

      return res.status(404).json(response);
    }

    const compare = comparePassword(password, findUser.password);

    if (!compare) {
      response.messages = "Password invalido";
      response.success = false;
      response.data = [];

      return res.status(400).json(response);
    }

    const token = await generateToken(findUser);
    response.messages = "ok..";
    response.success = true;
    response.data = { user: findUser, token };
    console.log(token);
    return res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(response);
  }
};

const obtieneUsuarios = async (req, res) => {
  var response = "";
  try {
    response.data = await listarUsuariosActivos();
    console.log(await listarUsuariosActivos());
    response.messages = "ok";
    response.success = true;
    return res.json(response);
  } catch (error) {
    console.log(error);
    response.messages = "No posee acceso";
    response.success = false;
    response.data = [];

    return res.status(500).json(response);
  }
};

const listarUsuarios_CT = async (req, res) => {
  console.log("listarUsuarios_CT");
  resp.data = await listarUsuarios_BL();
  resp.msg = "Listado de usuarios";
  return res.json(resp);
};
module.exports = { nuevoUsuario, signin, obtieneUsuarios, listarUsuarios_CT };
