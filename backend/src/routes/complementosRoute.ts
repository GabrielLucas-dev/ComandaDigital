import express from 'express'
import { deleteComplemento, editComplemento, findComplementoById, findComplementos, insertComplemento } from '../controller/complementosController.js';

const router = express.Router();

router.get('/', findComplementos)
router.post('/', insertComplemento)
router.delete('/:id_complemento', deleteComplemento)
router.get('/:id_complemento', findComplementoById)
router.put('/:id_complemento', editComplemento)

export default router