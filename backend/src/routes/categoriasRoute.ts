import express from 'express'
import { deleteCategoria, editCategoria, findCategoriaById, findCategorias, insertCategoria } from '../controller/categoriasController.js'
import { tokenAuth } from '../middleware/tokenAuthMiddleware.js'

const router = express.Router()

router.get('/', tokenAuth, findCategorias)
router.post('/', tokenAuth, insertCategoria)
router.delete('/:id_categoria', tokenAuth, deleteCategoria)
router.get('/:id_categoria', tokenAuth, findCategoriaById)
router.put('/:id_categoria', tokenAuth, editCategoria)

export default router