import express from 'express'
import { deleteComplemento, findComplementoById, findComplementos, insertComplemento } from '../controller/complementosController.js';

const router = express.Router();

router.get('/', findComplementos)
router.post('/', insertComplemento)
router.delete('/:id_complemento', deleteComplemento)
router.get('/:id_complemento', findComplementoById)

export default router