import express from 'express'
import { getAnalises30dias, getAnalisesGerais, getAnalisesPeriodo } from '../controller/analisesController.js';

const router = express.Router();

router.get('/30dias', getAnalises30dias)
router.get('/gerais', getAnalisesGerais)
router.get('/periodo', getAnalisesPeriodo)

export default router