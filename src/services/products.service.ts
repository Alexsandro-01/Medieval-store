import Joi, { ValidationError } from 'joi';
import model from '../models/products.model';
import { InsertProduct, Product } from '../interfaces/main.interfaces';
import { 
  throwBadRequestError,
  throwUnprocessableError, 
} from '../utils/erroHandler';

function especificError(erro: ValidationError) {
  const { message } = erro;
  
  if (message.includes('is required')) {
    throwBadRequestError(message);
  }

  if (message.includes('must be a string')) {
    throwUnprocessableError(message);
  }

  if (message.includes('length must be')) {
    throwUnprocessableError(message);
  }
}

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

async function insert(data: InsertProduct): Promise<Product> {
  await validProduct(data);
  const response = await model.insert(data);
  return response;
}

export default {
  insert,
};