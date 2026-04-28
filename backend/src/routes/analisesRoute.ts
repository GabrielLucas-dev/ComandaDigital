import express from 'express'
import { analises } from '../controller/analisesController.js';

const router = express.Router();

router.get('/', analises)

export default router