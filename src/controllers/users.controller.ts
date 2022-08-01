import { Request, Response } from 'express';
import { LoginUser } from '../interfaces/main.interfaces';
import service from '../services/users.service';

async function create(req: Request, res: Response): Promise<void> {
  const dataUser = req.body;

  const token = await service.create(dataUser);

  res.status(201).json({ token });
}

async function login(req: Request, res: Response): Promise<void> {
  const user: LoginUser = req.body;

  const token = await service.login(user);
  res.status(200).json({ token });
}

export default {
  create,
  login,
};