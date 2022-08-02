import { Request, Response } from 'express';
import { InsertProduct } from '../interfaces/main.interfaces';
import service from '../services/products.service';

async function insert(req: Request, res: Response): Promise<void> {
  const data: InsertProduct = req.body;

  const response = await service.insert(data);
  
  res.status(201).json(response);
}

async function getAll(req: Request, res: Response): Promise<void> {
  const result = await service.getAll();

  res.status(200).json(result);
}

export default {
  insert,
  getAll,
};