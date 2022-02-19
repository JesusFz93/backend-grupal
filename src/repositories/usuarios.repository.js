const Usuario = require("../models/usuarios.model");

const nuevoUsuario = async (model) => {
  const nuevoUsuario = new Usuario(model);
  const result = await nuevoUsuario.save();

  return result;
};

const buscarPorUsuario = async (username) => {
  return await Usuario.findOne({ username });
};

const listarUsuarios = async () => {
  return await Usuario.find().select({ nombre: true, email: true });
};

const listarUsuarios_RP = async () => {
  const resultado = await Usuario.find();
  return resultado;
};

module.exports = {
  nuevoUsuario,
  buscarPorUsuario,
  listarUsuarios,
  listarUsuarios_RP,
};
