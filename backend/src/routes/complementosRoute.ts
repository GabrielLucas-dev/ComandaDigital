import express from 'express'
import { findComplementos, insertComplemento } from '../controller/complementosController.js';

const router = express.Router();

router.get('/', findComplementos)
router.post('/', insertComplemento)

export default router