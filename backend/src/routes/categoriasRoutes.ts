import express from 'express'
import { findCategorias, insertCategoria } from '../controller/categoriasController.js'

const router = express.Router()

router.get('/', findCategorias)
router.post('/', insertCategoria)

export default router