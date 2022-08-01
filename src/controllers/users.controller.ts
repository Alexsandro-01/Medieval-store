import { Request, Response } from 'express';
// import { InsertUser } from '../interfaces/main.interfaces';
import service from '../services/users.service';

async function create(req: Request, res: Response): Promise<void> {
  const dataUser = req.body;

  const token = await service.create(dataUser);

  res.status(201).json({ token });
}

export default {
  create,
};