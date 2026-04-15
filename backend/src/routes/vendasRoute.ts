import express from "express";
import { findVendas } from "../controller/vendasController.js";

const router = express.Router()

router.get('/', findVendas)

export default router