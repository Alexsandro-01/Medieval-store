import { Request, Response } from 'express';
import { InsertProduct } from '../interfaces/main.interfaces';
import service from '../services/products.service';

async function insert(req: Request, res: Response): Promise<void> {
  /*  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Cadastramento de novos produtos',
        schema: {
            $name: 'Espada longa',
            $amount: '30 peças de ouro'
        }
  } */
  const data: InsertProduct = req.body;

  const response = await service.insert(data);
  
  res.status(201).json(response);
}

async function getAll(req: Request, res: Response): Promise<void> {
  /* #swagger.responses[200] = {
        description: 'Lista de produtos obtida com sucesso',
        schema: [
          {
            "id": 1,
            "name": "Poção de cura",
            "amount": "20 gold",
            "orderId": null
          }
        ]
  } */
  const result = await service.getAll();

  res.status(200).json(result);
}

export default {
  insert,
  getAll,
};