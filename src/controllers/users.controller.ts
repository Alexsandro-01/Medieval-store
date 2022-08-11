import { Request, Response } from 'express';
import { LoginUser } from '../interfaces/main.interfaces';
import service from '../services/users.service';

async function create(req: Request, res: Response): Promise<void> {
  /*  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Inserir um novo usuário',
        schema: {
            $username: 'Jhon Doe',
            $classe: 'swordsman',
            $level: 12,
            $password: '1234dfs8'
        }
  } */

  /* #swagger.responses[201] = {
        description: 'token de usuário',
        schema: {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
  } */
  const dataUser = req.body;

  const token = await service.create(dataUser);

  res.status(201).json({ token });
}

async function login(req: Request, res: Response): Promise<void> {
  /*  #swagger.parameters['obj'] = {
        in: 'body',
        description: 'Login de usuário cadastrado',
        schema: {
            $username: "string",
            $password: "string"
        }
  } */

  /* #swagger.responses[200] = {
        description: 'token de usuário',
        schema: {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
  } */
  const user: LoginUser = req.body;

  const token = await service.login(user);
  res.status(200).json({ token });
}

export default {
  create,
  login,
};