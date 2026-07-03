import express from "express";
import { deleteProduto, editProduto, findProdutoById, findProdutos, insertProduto } from "../controller/produtosController.js";
import { tokenAuth } from "../middleware/tokenAuthMiddleware.js";

const router = express.Router();

router.get("/", tokenAuth, findProdutos)
router.post("/", tokenAuth, insertProduto);
router.delete("/:id_produto", tokenAuth, deleteProduto)
router.get('/:id_produto', tokenAuth, findProdutoById)
router.put('/:id_produto', tokenAuth, editProduto)

export default router;
