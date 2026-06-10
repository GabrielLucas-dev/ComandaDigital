import express from 'express'
import { closePdv, createPdv, getActivePdv, getAnalisesPdv, getPdvs30dias } from '../controller/pdvController.js'
import { tokenAuth } from '../middleware/tokenAuthMiddleware.js'

const router = express.Router()

router.post('/', tokenAuth, createPdv)
router.put('/:id_pdv', tokenAuth, closePdv)
router.get('/active', tokenAuth, getActivePdv)
router.get("/:pdv_id/resumo", tokenAuth, getAnalisesPdv)
router.get("/30dias", tokenAuth, getPdvs30dias)

export default router