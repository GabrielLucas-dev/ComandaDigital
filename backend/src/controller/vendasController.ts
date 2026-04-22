import type { Request, Response } from "express";
import * as vendasService from "../service/vendasService.js";

export async function findVendas(req: Request, res: Response) {
  try {
    const vendas = await vendasService.findVendas();
    res.status(200).json(vendas);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function insertVendas(req: Request, res: Response) {
  const values = req.body;
  try {
    const venda = await vendasService.insertVendas(values);
    res.status(201).json(venda);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function findVendasByData(req: Request, res: Response) {
  const data = req.params.data_venda;
  try {
    const vendas = await vendasService.findVendaByData(data);
    res.status(200).json(vendas);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function findVendaById(req: Request, res: Response) {
  const id = req.params.id_venda;
  try {
    const venda = await vendasService.findVendaById(id);
    res.status(200).json(venda);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
