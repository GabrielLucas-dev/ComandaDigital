import express from 'express'
import { createUsuario, getUsuarioLogin, getUsuarios } from '../controller/usuariosController.js';

const router = express.Router();

router.get('/', getUsuarios)
router.post('/login', getUsuarioLogin);
router.post('/', createUsuario)

export default router;