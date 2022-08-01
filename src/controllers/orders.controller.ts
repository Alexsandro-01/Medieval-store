import { Request, Response } from 'express';
import service from '../services/orders.service';

async function getAll(req: Request, res: Response) {
  const ordens = await service.getAll();

  res.status(200).json(ordens);
}

export default {
  getAll,
};