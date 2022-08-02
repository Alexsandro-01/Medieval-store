import model from '../models/orders.model';
// import { Order } from '../interfaces/main.interfaces';

async function getAll() {
  const result = await model.getAll();

  return result;
}

async function create(userId: number): Promise<number> {
  const result = await model.create(userId);
  return result;
}

export default {
  getAll,
  create,
};