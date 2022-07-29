import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InsertProduct, Product } from '../interfaces/main.interfaces';

async function insert(data: InsertProduct): Promise<Product> {
  const { name, amount } = data;
  const result = await connection.query<ResultSetHeader>(`
  INSERT INTO
    Trybesmith.Products (name, amount)
  VALUES
    (?, ?);
  `, [name, amount]);

  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...data };
}

export default {
  insert,
};
