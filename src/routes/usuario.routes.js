const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controllers');
router.post('/', UsuarioController.crear);
router.get('/', UsuarioController.listar);
module.exports = router;