import Joi from 'joi';
import model from '../models/products.model';
import { InsertProduct, Product, ProductsIdsObj } from '../interfaces/main.interfaces';
import especificError from '../utils/matchErrors';

async function validProduct(data: InsertProduct): Promise<void> {
  const schema = Joi.object<InsertProduct>({
    name: Joi.string().required().min(3).max(255),
    amount: Joi.string().required().min(3).max(255),
  });

  const result = schema.validate(data);
  if (result.error) {
    especificError(result.error);
  }
}

async function validProductsIds(data: ProductsIdsObj): Promise<void> {
  const { productsIds } = data;

  const schema = Joi.object({
    productsIds: Joi.array().required().items(Joi.number().required()),
  });
  
  const result = schema.validate(data);
  
  if (result.error) {
    especificError(result.error);
  }
  
  if (productsIds.length === 0) {
    const error = new Error('"productsIds" must include only numbers');
    especificError(error);
  }
}

async function insert(data: InsertProduct): Promise<Product> {
  await validProduct(data);
  const response = await model.insert(data);
  return response;
}

async function getAll(): Promise<Product[]> {
  const result = await model.getAll();
  return result;
}

async function updateOrderId(data: ProductsIdsObj, orderId: number) {
  await validProductsIds(data);

  const { productsIds } = data;
  const result = await model.updateOrderId(productsIds, orderId);

  return result;
}

export default {
  insert,
  getAll,
  updateOrderId,
};