import express from 'express'
import { findItensVenda, findItensVendaById, insertItensVenda } from '../controller/itensVendaController.js';

const router = express.Router();

router.get('/', findItensVenda)
router.post('/', insertItensVenda)
router.get('/detalhes/:venda_id', findItensVendaById)

export default router