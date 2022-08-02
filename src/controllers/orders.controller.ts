import { Request, Response } from 'express';
import { RequestWithUser, ProductsIdsObj } from '../interfaces/main.interfaces';
import ordersService from '../services/orders.service';
import productsService from '../services/products.service';

async function getAll(req: Request, res: Response) {
  const ordens = await ordersService.getAll();

  res.status(200).json(ordens);
}

async function create(req: RequestWithUser, res: Response): Promise<void> {
  const data: ProductsIdsObj = req.body;
  const { user } = req;
  const userId = user?.id as number;
  const orderId = await ordersService.create(userId);

  await productsService.updateOrderId(data, orderId);

  const { productsIds } = data;
  const result = { userId, productsIds };

  res.status(201).json(result);
}

export default {
  getAll,
  create,
};