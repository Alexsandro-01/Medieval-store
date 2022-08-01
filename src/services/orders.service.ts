import model from '../models/orders.model';

async function getAll() {
  const result = await model.getAll();

  return result;
}

export default {
  getAll,
};