import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { InsertUser } from '../interfaces/main.interfaces';

dotenv.config();

function makeToken(data: InsertUser): string {
  const { password, ...user } = data;

  const SECRET = process.env.JWT_SECRET || 'TheDark';

  const payload = { data: { ...user } };

  const token = JWT.sign(payload, SECRET);

  return token;
}

export default {
  makeToken,
};