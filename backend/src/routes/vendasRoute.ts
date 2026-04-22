import express from "express";
import {findVendaById, findVendas, findVendasByData, insertVendas} from "../controller/vendasController.js";

const router = express.Router();

router.get("/", findVendas);
router.post("/", insertVendas);
router.get("/:data_venda", findVendasByData);
router.get("/detalhes/:id_venda", findVendaById);

export default router;
