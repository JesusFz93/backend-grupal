const Usuario = require("../models/usuarios.model");
const {
  nuevoUsuario,
  buscarPorUsuario,
  listarUsuarios,
  listarUsuarios_RP,
} = require("../repositories/usuarios.repository");
const { encryptPassword } = require("../helpers/password.utils");

const altaUsuario = async (objUsuario) => {
  objUsuario.password = encryptPassword(objUsuario.password);
  return await nuevoUsuario(objUsuario);
};

const buscarUsuarioDB = async (username) => {
  return await buscarPorUsuario(username);
};

const listarUsuariosActivos = async () => {
  return await listarUsuarios();
};

const listarUsuarios_BL = async () => {
  const resultado = await listarUsuarios_RP();

  const data = resultado.map((usuario) => {
    return {
      id: usuario._id,
      nombre: usuario.username,
      username: usuario.username,
      email: usuario.email,
      password: usuario.password,
    };
  });

  return data;
};

const obtenerUsusarioPorNombreBL = async (username) => {
  const usuarioDB = await Usuario.findOne({ username });
  return usuarioDB;
};

module.exports = {
  altaUsuario,
  buscarUsuarioDB,
  listarUsuariosActivos,
  listarUsuarios_BL,
  obtenerUsusarioPorNombreBL,
};
