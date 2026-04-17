import express from "express";
import { findVendas, insertVendas } from "../controller/vendasController.js";

const router = express.Router()

router.get('/', findVendas)
router.post('/', insertVendas)

export default router