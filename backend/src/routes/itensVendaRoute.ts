import express from 'express'
import { findItensVenda, insertItensVenda } from '../controller/itensVendaController.js';

const router = express.Router();

router.get('/', findItensVenda)
router.post('/', insertItensVenda)

export default router