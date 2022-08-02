import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { InsertUser, TokenUser } from '../interfaces/main.interfaces';
import { throwUnauthorizedError } from '../utils/erroHandler';

dotenv.config();
const SECRET = process.env.JWT_SECRET || 'TheDark';

function makeToken(data: InsertUser): string {
  const { password, ...user } = data;

  const payload = { data: { ...user } };

  const token = JWT.sign(payload, SECRET);

  return token;
}

function readToken(token: string): TokenUser {
  let user = {};
  
  try {
    const { data }: any = JWT.verify(token, SECRET);

    user = data;
  } catch (e) {
    throwUnauthorizedError('Invalid token');  
  }

  return user as TokenUser;
}

export default {
  makeToken,
  readToken,
};