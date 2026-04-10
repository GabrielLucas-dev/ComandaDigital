import express from 'express'
import { deleteCategoria, findCategoriaById, findCategorias, insertCategoria } from '../controller/categoriasController.js'

const router = express.Router()

router.get('/', findCategorias)
router.post('/', insertCategoria)
router.delete('/:id_categoria', deleteCategoria)
router.get('/:id_categoria', findCategoriaById)

export default router