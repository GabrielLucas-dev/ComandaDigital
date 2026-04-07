import express from "express";
import { findProdutos, insertProduto } from "../controller/produtosController.js";

const router = express.Router();

router.get('/', findProdutos)
router.post("/", insertProduto);

export default router;
