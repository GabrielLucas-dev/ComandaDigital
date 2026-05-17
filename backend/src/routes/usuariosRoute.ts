import express from 'express'
import { getUsuarioLogin, getUsuarios } from '../controller/usuariosController.js';

const router = express.Router();

router.get('/', getUsuarios)
router.post('/login', getUsuarioLogin);

export default router;