import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { InsertProduct, Product } from '../interfaces/main.interfaces';

async function insert(data: InsertProduct): Promise<Product> {
  const { name, amount } = data;
  const sql = `
  INSERT INTO
    Trybesmith.Products (name, amount)
  VALUES
    (?, ?);
  `;

  const result = await connection.query<ResultSetHeader>(sql, [name, amount]);

  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...data };
}

async function getAll(): Promise<Product[]> {
  const sql = `
  SELECT
    *
  FROM
    Trybesmith.Products
  `;
  const [rows] = await connection.query(sql);
  return rows as Product[];
}

async function updateOrderId(productsIds: Array<number>, orderId: number) {
  const sql = `
  UPDATE
    Trybesmith.Products
  SET
    orderId = ?
  WHERE
    id = ?;
  `;

  const result = await Promise.all(productsIds.map(async (id) => {
    const [response] = await connection.query(sql, [orderId, id]);
    
    return response;
  }));

  return result;
}

export default {
  insert,
  getAll,
  updateOrderId,
};
