import express from 'express'
import { deleteComplemento, editComplemento, findComplementoById, findComplementos, insertComplemento } from '../controller/complementosController.js';
import { tokenAuth } from '../middleware/tokenAuthMiddleware.js';

const router = express.Router();

router.get('/', tokenAuth, findComplementos)
router.post('/', tokenAuth, insertComplemento)
router.delete('/:id_complemento', tokenAuth, deleteComplemento)
router.get('/:id_complemento', tokenAuth, findComplementoById)
router.put('/:id_complemento', tokenAuth, editComplemento)

export default router