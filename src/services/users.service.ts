import Joi from 'joi';
import { InsertUser, LoginUser } from '../interfaces/main.interfaces';
import especificError from '../utils/matchErrors';
import { throwUnauthorizedError } from '../utils/erroHandler';
import model from '../models/users.model';
import authService from './auth.service';

async function isValidInsertUser(data: InsertUser): Promise<void> {
  const schema = Joi.object<InsertUser>({ 
    username: Joi.string().required().min(3).max(255),
    classe: Joi.string().required().min(3).max(255),
    level: Joi.number().required().min(1),
    password: Joi.string().required().min(8).max(255),
  });

  const result = schema.validate(data);

  if (result.error) {
    especificError(result.error);
  }
}

async function isValidLogin(data: LoginUser): Promise<void> {
  const schema = Joi.object<LoginUser>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(data);

  if (result.error) {
    especificError(result.error);
  }
}

async function create(dataUser: InsertUser): Promise<string> {
  await isValidInsertUser(dataUser);

  const newUser = await model.create(dataUser);

  const token = authService.makeToken(newUser);
  return token;
}

async function login(data: LoginUser): Promise<string> {
  await isValidLogin(data);

  const user = await model.getUserByNameAndPassword(data);
  if (!user) {
    throwUnauthorizedError('Username or password invalid');
  }

  const token = authService.makeToken(user);

  return token;
}

export default {
  create,
  login,
};