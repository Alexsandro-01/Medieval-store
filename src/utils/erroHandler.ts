export function throwNotFoundError(message: string): void {
  const erro = new Error(message);
  erro.name = 'NotFoundError';
  throw erro;
}

export function throwBadRequestError(message: string): void {
  const erro = new Error(message);
  erro.name = 'BadRequestError';
  throw erro;
}

export function throwUnprocessableError(message: string): void {
  const erro = new Error(message);
  erro.name = 'UnprocessableError';
  throw erro;
}
