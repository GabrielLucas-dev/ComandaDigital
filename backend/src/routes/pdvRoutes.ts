import express from 'express'
import { closePdv, createPdv, getActivePdv } from '../controller/pdvController.js'
import { tokenAuth } from '../middleware/tokenAuthMiddleware.js'

const router = express.Router()

router.post('/', tokenAuth, createPdv)
router.put('/', tokenAuth, closePdv)
router.get('/active', tokenAuth, getActivePdv)

export default router