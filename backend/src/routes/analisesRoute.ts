import express from 'express'
import { getAnalises30dias, getAnalisesGerais, getAnalisesPeriodo } from '../controller/analisesController.js';
import { requireRole } from '../middleware/requireRoleMiddleware.js';
import { cargoUsuario } from '../model/usuarios.js';
import { tokenAuth } from '../middleware/tokenAuthMiddleware.js';

const router = express.Router();

const cargo = requireRole(cargoUsuario.GERENTE)

router.get('/30dias', tokenAuth, cargo, getAnalises30dias)
router.get('/gerais', tokenAuth, cargo, getAnalisesGerais)
router.get('/periodo', tokenAuth, cargo, getAnalisesPeriodo)

export default router