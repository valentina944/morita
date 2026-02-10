const UsuarioService = require('../services/usuario.service');

const crear = async (req, res) => {
    try {
        const usuario = await UsuarioService.crearUsuario(req.body);
res.status(201).json(usuario);

    }catch (error){ 
        res.status(400).json({error: error.message});
    }

};
const listar = async (req, res) => {
    try {
        const usuarios = await UsuarioService.listarUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    crear,
    listar,
};