import express from 'express'
import { findItensVenda, findItensVendaById, insertItensVenda } from '../controller/itensVendaController.js';
import { tokenAuth } from '../middleware/tokenAuthMiddleware.js';

const router = express.Router();

router.get('/', tokenAuth, findItensVenda)
router.post('/', tokenAuth, insertItensVenda)
router.get('/detalhes/:venda_id', tokenAuth, findItensVendaById)

export default router