import express from 'express'
import { closePdv, createPdv, getActivePdv } from '../controller/pdvController.js'

const router = express.Router()

router.post('/', createPdv)
router.put('/', closePdv)
router.get('/active_pdv', getActivePdv)