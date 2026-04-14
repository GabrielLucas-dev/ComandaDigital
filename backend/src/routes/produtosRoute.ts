import express from "express";
import { deleteProduto, editProduto, findProdutoById, findProdutos, insertProduto } from "../controller/produtosController.js";

const router = express.Router();

router.get("/", findProdutos)
router.post("/", insertProduto);
router.delete("/:id_produto", deleteProduto)
router.get('/:id_produto', findProdutoById)
router.put('/:id_produto', editProduto)

export default router;
