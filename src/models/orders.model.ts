import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { OrderWithProducts, Order } from '../interfaces/main.interfaces';

async function getProductsIdFromOrders(ordens: Order[]): Promise<OrderWithProducts[]> {
  const sql = `
  SELECT
    id
  FROM
    Trybesmith.Products
  WHERE
    OrderId = ?
  `;

  const response = await Promise.all(ordens.map(async (orden: Order) => {
    const [result] = await connection.query<RowDataPacket[]>(sql, [orden.id]);
    
    const productsIds = result.map((products) => products.id);

    return { ...orden, productsIds };
  }));

  return response;
}

async function getAll() {
  const sql = `
  SELECT
    *
  FROM
    Trybesmith.Orders
  `;

  const [result] = await connection.query<[]>(sql);
  const response = await getProductsIdFromOrders(result);
  return response;
}

export default {
  getAll,
  getProductsIdFromOrders,
};