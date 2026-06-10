import express from 'express'
import { closePdv, createPdv, getActivePdv, getAnalisesPdv } from '../controller/pdvController.js'
import { tokenAuth } from '../middleware/tokenAuthMiddleware.js'

const router = express.Router()

router.post('/', tokenAuth, createPdv)
router.put('/:id_pdv', tokenAuth, closePdv)
router.get('/active', tokenAuth, getActivePdv)
router.get("/:pdv_id/resumo", tokenAuth, getAnalisesPdv)

export default router