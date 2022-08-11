import { Request, Response } from 'express';
import { RequestWithUser, ProductsIdsObj } from '../interfaces/main.interfaces';
import ordersService from '../services/orders.service';
import productsService from '../services/products.service';

async function getAll(req: Request, res: Response) {
  /*  #swagger.parameters['authorization'] = {
        in: 'header',
        required: true,
        description: 'Enviar token obtido no login'
      } */

  /* #swagger.responses[200] = {
        description: 'Lista de pedidos obtida com sucesso',
        schema: [
          {
            "id": 1,
            "userId": 2,
            "productsIds": [1, 2]
          }
        ]
  } */
  const ordens = await ordersService.getAll();

  res.status(200).json(ordens);
}

async function create(req: RequestWithUser, res: Response): Promise<void> {
  /*  #swagger.parameters['authorization'] = {
        in: 'header',
        required: true,
        description: 'Enviar token obtido no login'
      } */

  /*  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Cadastramento de numeros de pedidos',
        schema: {
            $productsIds: [1, 2],
        }
  } */

  /* #swagger.responses[201] = {
        description: 'Lista de pedidos obtida com sucesso',
        schema: {
          "userId": 1,
          "productsIds": [1, 2]
        }
  } */
  
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