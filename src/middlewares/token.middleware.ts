import { Response, NextFunction } from 'express';
import { throwUnauthorizedError } from '../utils/erroHandler';
import { RequestWithUser } from '../interfaces/main.interfaces';
import authService from '../services/auth.service';
import userModel from '../models/users.model';
 
async function tokenMiddleware(req: RequestWithUser, _res: Response, next: NextFunction) {
  const token = req.headers.authorization || '';

  if (!token) {
    throwUnauthorizedError('Token not found');
  }

  const data = authService.readToken(token);
  const { username } = data;
  const user = await userModel.getUserByName(username);

  if (!user) {
    throwUnauthorizedError('Invalid token');
  }

  req.user = user;
  next();
}

export default tokenMiddleware;