import { ValidationError } from 'joi';

import { 
  throwBadRequestError,
  throwUnprocessableError, 
} from './erroHandler';

export default function especificError(erro: ValidationError | Error) {
  const { message } = erro;
  
  if (message.includes('is required')) {
    throwBadRequestError(message);
  }

  if (message.includes('must be')) {
    throwUnprocessableError(message);
  }

  if (message.includes('length must be')) {
    throwUnprocessableError(message);
  }

  if (message.includes('must include only')) {
    throwUnprocessableError(message);
  }
}